import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.ALLMAINCATEGORY).then((response) => {
    console.log("main category is", response);
    return response;
  });
}
