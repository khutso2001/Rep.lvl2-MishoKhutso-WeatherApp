import { ProductList } from '../productData.js.js';
import { SingleProduct } from '../productData.js.js';

const Api = {
  baseUrl: 'https://fakestoreapi.com/',
  getProductList: function () {
    return fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        return (json.map(el => {
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
  signUp: (name, email, password, password_confirmation) => {
    console.log(name, email, password, password_confirmation);
    return fetch("http://159.65.126.180/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },
  signIn: (email, password) => {
    return fetch("http://159.65.126.180/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => {
      if (!resp.ok) {
        resp.text().then((text) => {
          throw Error(text);
        });
      } else {
        return resp.json();
      }
    });
  },
}

export default Api;