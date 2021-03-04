
export  const fetchCategories = () => {
    
    return fetch("https://f49ac3f9c1fe.ngrok.io/api/categories")
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("errore")
        }
    })
}