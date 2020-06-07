import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.ALLFAQ).then((response) => {
    console.log("faq is", response);
    return response;
  });
}
