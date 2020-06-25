import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.MAINCATEGORY).then((response) => {
    return response;
  });
}
