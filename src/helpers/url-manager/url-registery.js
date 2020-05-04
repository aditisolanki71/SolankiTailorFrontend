class UrlRegistery {
    urls = [];
  
    register(name, url) {
      this.urls[name] = url;
    }
  
    get(name) {
      if (this.urls[name]) {
        return this.urls[name];
      }
      throw new Error('nourlfound');
    }
  
    has(name) {
      return Boolean(this.urls[name]);
    }
  }
  
  export default UrlRegistery;
  