import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.ALLBLOG).then((response) => {
    return response;
  });
}
