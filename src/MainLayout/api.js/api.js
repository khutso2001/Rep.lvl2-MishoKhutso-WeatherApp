import {ProductList} from '../productData.js.js';
import { SingleProduct } from '../productData.js.js';

const Api ={
  baseUrl:'https://fakestoreapi.com/',

      getProductList:function(){
        return  fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
          return (json.map(el=>{
          return SingleProduct(el);
          }))
        })
    },
    Pages: (p) => {

      return fetch(`https://fakestoreapi.com/products?page` + p)
          .then(res => res.json())
          .then(json => {
              return ProductList(json);
          })
  },
  getSingleItem: (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(el => {
        return SingleProduct(el);
    })
},
}

export default Api;