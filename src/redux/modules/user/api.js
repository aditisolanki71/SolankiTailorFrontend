import urls from "../../service-urls";
export function listApi() {
  return window.__API__.get(urls.ALLUSER).then((response) => {
    return response;
  });
}
export function readApi(id) {
  return window.__API__.get(`${urls.ALLUSER}/${id}`);
}

export function removeApi(id) {
  return window.__API__.del(`${urls.ALLUSER}/${id}`, {
    message: "user has been deleted successfully.",
  });
}

export function updateApi(data, id) {
  console.log("user update api", data);
  console.log("id is", id);
  return window.__API__.post(`${urls.ALLUSER}/${id}`, {
    data,
    message: "User has been updated successfully",
  });
}

export function createApi(data) {
  return window.__API__.post(urls.ALLUSER, {
    data,
    message: "User has been created successfully.",
  });
}
