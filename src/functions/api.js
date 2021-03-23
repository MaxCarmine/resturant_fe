
export  const fetchCategories = () => {
    return fetchWrapper(`https://apirestaurant.mvlabs.it/api/categories`, 'GET')
    
}

export const fetchCategory=(id)=>{
    return fetchWrapper(`https://apirestaurant.mvlabs.it/api/categories/${id}`,`GET`)
    
}

export const postLogin=(body)=>{
    return fetchWrapper(`https://apirestaurant.mvlabs.it/api/login`,`POST`,body)
}

export const fetchEveryItem = () => {
    return fetchWrapper("https://apirestaurant.mvlabs.it/api/products", "GET");
  };

/**
 * 
 * @param {*} url l end point della risorsa, contanto l api   
 * @param {*} method il modo in cui voglio passare i dati
 * @param {*} body cosa passo 
 * @returns 
 */

export const fetchWrapper=(url, method, body)=>{
    const jwt = localStorage.getItem("jwt");
    return fetch(
        url,
        {
            method:method,
            ...(body ? {body: JSON.stringify(body)}:null),
            headers:{
                ...(jwt ?{Authorization: `Bearer ${jwt}`}:null),
                ...(body ?{'Content-Type': 'application/json'}:null),
                }
            
        }   
    )
    .then(response=>{
        if(response.headers.get('jwt')){
            localStorage.setItem('jwt',response.headers.get('jwt'))
        }
        if(response.ok){
            return response.clone().json().catch(()=>response.text())
        }else{
            if(response.status === 401){
                localStorage.removeItem('jwt');
            }
            throw new Error("Eroooreeee");
        }
    })
}