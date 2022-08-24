import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  render() {
    if(!this.state.data) { return null }
    var paginationLimit = 20;
    for(let i = 0; i < 20; i++) {
      console.log("this state data  i is " + i + " data:");
      console.log(this.state.data[i]);
    }
    let products = this.state.data;

    return (
      <div className="App">
        <div id="container">
          All Products
          <div id="product_container">
            {products.map(product => {
              return(
                <Product product_name={product.product_name} description={product.description} price={product.price} product_image={product.product_image} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  getProductsJSON() {
    fetch('http://localhost:3004/products')
    .then(response => response.json())
    .then(data => this.setState({data}));
      
  }
  
  componentDidMount() {
    this.getProductsJSON();
  }

  getProducts(paginationLimit) {
    let products = [];
    for(let i = 0; i < paginationLimit; i++) {
      const item = products[i];
      products.push()
    }
  }
}

const Product = (props) => {
  return(
    <div className="product">
      <div className="image_container">
        <img src={props.product_image}></img>
      </div>
      
      <h3>{props.product_name}</h3>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
    </div>
  );
};

export default App;