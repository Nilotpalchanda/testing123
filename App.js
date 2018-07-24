import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../store/action'
import axios from 'axios'

class App extends Component {

  state = {
    products:[]
}

componentDidMount(){
  axios.get('https://shopsserver.herokuapp.com/products/1')
  .then(response =>{
    console.log(response)
    this.setState({
        products: response.data
    })

})
}
  render() {

    return (
      <div>
        <h3>Counter</h3>
        <hr/>
          <p> Value :{this.props.valueQ}</p>
        <hr/>
        <button onClick={this.props.ADD_ONE}>ADD ONE</button>&nbsp;
        <button onClick={this.props.MINUS_ONE}>MINUS ONE</button>&nbsp;
        <button onClick={this.props.ADD_FIVE}>ADD FIVE</button>&nbsp;
        <button onClick={this.props.MINUS_FIVE}>MINUS FIVE</button>
        <hr/>
          <h3>CHANGE NAME</h3>
          <p><strong>Name:</strong>{this.props.newName}</p>
          <h3>Product Price</h3>
          
          <p><strong>Price:</strong>{this.state.products.Price}</p>
          <p><strong>Price:</strong>{this.props.newPrice}</p>
        <hr/>
        <button onClick={()=>this.props.CHANGE_NAME(this.state.products.ProductName)}>CHANGE NAME</button>&nbsp;
        <button onClick={()=>this.props.ADD_PRODUCT(this.state.products.Price)}>ADD MORE PRODUCT</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    valueQ: state.value,
    newName: state.name,
    newPrice: state.price
  }
}


const mapDispatchToprops =(dispatch) =>{
  return{
    ADD_ONE: ()=> dispatch({type:actionTypes.ADD_ONE}),
    MINUS_ONE: ()=> dispatch({type:actionTypes.MINUS_ONE}),
    ADD_FIVE: ()=> dispatch({type:actionTypes.ADD_FIVE}),
    MINUS_FIVE: ()=> dispatch({type:actionTypes.MINUS_FIVE}),
    CHANGE_NAME: (ProductName)=> dispatch({type:actionTypes.CHANGE_NAME, ProName: {ProductName:ProductName}}),
    ADD_PRODUCT: (Price)=> dispatch({type:actionTypes.ADD_PRODUCT, ProName: {Price:Price}})
  }
}


export default connect(mapStateToProps,mapDispatchToprops)(App);
