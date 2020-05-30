class HttpRequestQueue {
  requests = [];

  push(request) {
    this.requests.push(request);
  }

  processAll() {
    this.requests.map((r) => r.execute());
    this.requests = [];
  }
}

export default HttpRequestQueue;
