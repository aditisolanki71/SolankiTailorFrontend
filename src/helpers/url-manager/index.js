import UrlRegistery from './url-registery';
import UrlMaker from './url-maker';

const registery = new UrlRegistery();
const maker = new UrlMaker(registery);

export function isUrl(...args) {
  return maker.isUrl(...args);
}

export function makeUrl(...args) {
  return maker.make(...args);
}

export function getUrl(...args) {
  return registery.get(...args);
}

export function registerUrl(...args) {
  return registery.register(...args);
}

export function has(...args) {
  return registery.has(...args);
}
