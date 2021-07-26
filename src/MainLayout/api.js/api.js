class Api {
    constructor(){

    }

     static getProductList(){
        return  fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
          return (json.map(el=>{
            return{
              title:el.title,
               price:el.price, 
               img:el.image,
               id:el.id,
               description: el.description,
               rating:6,
            }
          }))
        })
    }
    setSingleItem(id){

    }

    
}
export default Api;