import Loadable from 'react-loadable';
import Loading from './loader-overlay';
const RouterLoader = opts =>
  Loadable({
    loading: Loading,
    delay: 500,
    ...opts
  });

export default RouterLoader;
