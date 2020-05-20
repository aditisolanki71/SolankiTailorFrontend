//import moment from 'moment';
import superagent from 'superagent';
import { notify } from 'react-notify-toast';
import { browserHistory } from 'react-router';
//import { setToken, logout } from 'redux/modules/auth';
// import {
//   showLoader,
//   hideLoader,
//   isLoaderVisible
// } from '../components/utils/loader';
// import localStore from './localstore';
import HttpRequestQueue from './http-request-queue';
// import TokenManager from './token-manager';
//import { removeUserAuthData } from './index';

const showNotification = notify.createShowQueue();
// delay in milliseconds to wait before showing the loader
const LoaderDelay = 700;

const methods = ['get', 'post', 'put', 'patch', 'del'];

const RequestQueue = new HttpRequestQueue();

// const TokenHelper = new TokenManager(localStore);

function formatUrl(path) {
  let adjustedPath;
  if (/https?/.test(path)) {
    adjustedPath = path;
  } else {
    adjustedPath = path[0] !== '/' ? `/${path}` : path;
  }
  return adjustedPath;
}

// const logoutUser = store => {
//   //removeUserAuthData();
//   if (store) {
//     // store.dispatch(logout());
//     // store.dispatch(setToken(''));
//   }
// };

// eslint-disable-next-line
// const AuthIntercept = (apiClient, requestOptions) =>
//   require('superagent-intercept')((err, response) => {
//     if (requestOptions.clientHandledError === true) {
//       return true;
//     }
//     if (
//       response &&
//       (response.status === 400 ||
//         response.status === 500 ||
//         (response.status === 401 && response.body.error === 'invalid_token'))
//     ) {
//       if (
//         response.body.userMessage === 'User is not authenticated.' ||
//         response.body.error === 'invalid_token'
//       ) {
//         logoutUser(apiClient.store);
//         if (!requestOptions.redirectToLogin !== false) {
//           window.location.href = '/login?logoutParm=motadata';
//         }
//       }
//       try {
//         showNotification(
//           response.body.userMessage ||
//             `${response.status} - 
//         internal server error`,
//           'error'
//         );
//       } catch (e) {
//         console.log(e);
//       }
//     } else if (
//       response &&
//       [404, 502].indexOf(response.status) >= 0 &&
//       response.headers['content-type'] === 'text/html' &&
//       process.env.NODE_ENV !== 'development'
//     ) {
//       // can't connect to server
//       browserHistory.push('/noserver');
//     }
//   });

// const IsUnSecureRequest = url =>
//   url.indexOf('ususer') >= 0 ||
//   url.indexOf('oauth/token') >= 0 ||
//   url.indexOf('signup') >= 0 ||
//   url.indexOf('usoprfile') >= 0;

let totalRequests = 0;

export default class ApiClient {
  constructor() {
    methods.forEach(method => {
      this[method] = (
        path,
        { params, data, headers, files, fields, form, ...args } = {}
      ) =>
        new Promise((resolve, reject) => {
          const url = formatUrl(path);
          const request = superagent[method](url);

          if (params) {
            request.query(params);
          }

          if (headers) {
            request.set(headers);
          }

          if (form) {
            request.type('form');
          }

          if (files) {
            files.forEach(file => request.attach(file.key, file.value));
            request.on('progress', e => {
              const div = document.getElementById('global-loader-message');
              if (div) {
                div.innerHTML = `Uploading ${Math.ceil(e.percent)}%`;
              }
            });
          }

          if (fields) {
            fields.forEach(item => request.field(item.key, item.value));
          }

          if (data) {
            request.send(data);
          }

        //   request.use(AuthIntercept(this, args));

          if (args.responseType) {
            request.responseType(args.responseType);
          }

          request.execute = () => {
            // show loader only if loader is not false along with request options
            if (args.loader !== false) {
              totalRequests++;
            //   if (!isLoaderVisible()) {
            //     //showLoader(LoaderDelay);
            //   }
            }
            // if (localStore.getItem('token') && localStore.getItem('token')) {
            //   if (!(headers || {}).Authorization) {
            //     request.set(
            //       'Authorization',
            //       `Bearer ${localStore.getItem('token')}`
            //     );
            //   }
            // }
            request.end((err, { body, ...response } = {}) => {
              if (args.loader !== false) {
                totalRequests--;
                if (totalRequests === 0) {
                 // hideLoader();
                }
              }
              if (
                !err &&
                ['POST', 'PUT', 'DELETE'].indexOf(response.req.method) >= 0 &&
                args.notify !== false
              ) {
                showNotification(
                  args.message ||
                   'the operation has been completed',
                  'success',
                  2000
                );
              }
              return err
                ? reject(
                  args.fullResponse
                    ? { body: body || err, ...response }
                    : body || err
                )
                : resolve(args.fullResponse ? { body, ...response } : body);
            });
          };
          // execute request if can be proceed. else push it in queue(in case refresh token is required)
        //   if (
        //     !IsUnSecureRequest(url) &&
        //     localStore.getItem('expires_at') &&
        //     moment().unix() > +localStore.getItem('expires_at')
        //   ) {
        //     // get refresh token here because actual token is expired.
        //     RequestQueue.push(request);
        //     const promise = TokenHelper.renewToken();
        //     if (promise) {
        //       promise
        //         .then(response => {
        //           if (this.store) {
        //             this.store.dispatch(setToken(response.access_token));
        //           }
        //           RequestQueue.processAll();
        //         })
        //         .catch(() => {
        //           // if unable to refresh the token send user to login screen.
        //           logoutUser(this.store);
        //           window.location.href = '/login?logoutParm=motadata';
        //         });
        //     }
        //   } else {
        //     request.execute();
        //   }
        });
    });
  }

//   setToken(token) {
//     this.token = token;
//   }

  setStore(store) {
    this.store = store;
  }
}