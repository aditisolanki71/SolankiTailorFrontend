import urls from '../../service-urls';
export const loginApi = data  => {
    console.log('inside api  is',data)
    console.log('hey',window.__API__);
    console.log('hello',window.__API__.post(urls.LOGIN))
       return window.__API__.post(urls.LOGIN, {
        data: { 
            ...data 
        }
    }).then(response => {
        console.log('api response is',response)
       return response;
    })
}

export const registerApi = dataobj => 
    window.__API__.post(urls.REGISTER, {
                data: dataobj
    });

