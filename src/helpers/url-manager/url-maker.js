class UrlMaker {
  urlRegistery = null;
  constructor(urlRegistery) {
    this.urlRegistery = urlRegistery;
  }

  isUrl(path, name) {
    try {
      const route = this.urlRegistery.get(name);
      return route === path;
    } catch (e) {
      return false;
    }
  }

  make(name, routeParams, queryParams) {
    let route = this.urlRegistery.get(name);
    if (routeParams) {
      // replace all route params with given object
      Object.keys(routeParams).forEach((paramName) => {
        const regEx = new RegExp(`:${paramName}`);
        route = route.replace(regEx, routeParams[paramName]);
      });
    }
    if (queryParams) {
      route = `${route}?${Object.keys(queryParams)
        .reduce((a, k) => {
          a.push(`${k}=${encodeURIComponent(queryParams[k])}`);
          return a;
        }, [])
        .join("&")}`;
    }
    return route;
  }
}

export default UrlMaker;
