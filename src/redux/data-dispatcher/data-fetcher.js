import { dataActions, RefreshActionKeysMap, OneTimeActions } from './data-actions';
import urls from '../service-urls';
const refreshCheckTimeout = 4 * 60 * 1000; // time in milliseconds

export default class DataFetcher {
  store = null;

  shouldRefreshInterval = null;

  constructor(store) {
    this.store = store;
  }

  _startRefreshInterval() {
    this.shouldRefreshInterval = setInterval(() => {
      window.__API__.get(`${urls.SHOULDREFRESH}`).then(response => {
        if (response.requireRefresh) {
          if (!Array.isArray(response.resourceSet) || response.resourceSet.length === 0) {
            return this.scheduleAll();
          }
          response.resourceSet.forEach(key => {
            if (RefreshActionKeysMap[key]) {
              return RefreshActionKeysMap[key].reduce(
                (p, k) => p.then(() => this._scheduleAction(k), () => this._scheduleAction(k)),
                Promise.resolve()
              );
            }
            return this._scheduleAction(key);
          });
        }
      });
    }, refreshCheckTimeout);
  }

  scheduleAll() {
    const executePromiseSequence = promises =>
      promises.reduce((promise, promiseFunc) => promise.then(promiseFunc).catch(promiseFunc), Promise.resolve());
    const allPromises = Object.keys(dataActions)
      .map(actionName => () => {
        if (OneTimeActions.indexOf(actionName) >= 0) {
          return null;
        }
        return this._scheduleAction(actionName);
      })
      .filter(f => f);
    executePromiseSequence(allPromises);
    if (!this.shouldRefreshInterval) {
      this._startRefreshInterval();
    }
  }

  rescheduleAction(action) {
    return this._scheduleAction(action);
  }

  _scheduleAction(action) {
    if (dataActions[action]) {
      return this.store.dispatch(dataActions[action]());
    }
    return Promise.resolve();
  }

  removeAllSchedules() {
    if (this.shouldRefreshInterval) {
      clearInterval(this.shouldRefreshInterval);
      this.shouldRefreshInterval = null;
    }
  }
}