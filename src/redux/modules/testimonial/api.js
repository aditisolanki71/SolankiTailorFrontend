import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.ALLTESTIMONIAL).then((response) => {
    console.log("testi is", response);
    return response;
  });
}
