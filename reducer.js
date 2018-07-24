import * as actionTypes from './action'

const initialState={
    value:0,
    name:'MAX',
    price:null,
    product:[]
}

const reducer =(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.ADD_ONE:

        return{
            ...state,
            value: state.value + 1
        }
        case actionTypes.MINUS_ONE:
        return{
            ...state,
            value: state.value - 1
        }
        case actionTypes.ADD_FIVE:
        return{
            ...state,
            value: state.value + 5
        }
        case actionTypes.MINUS_FIVE:
        return{
            ...state,
            value: state.value - 5
        }
        case actionTypes.CHANGE_NAME:
        // const newName ={
        //     name: action.ProName.ProductName
        // }
        return{
            ...state,
            name: action.ProName.ProductName
        }
        case actionTypes.ADD_PRODUCT:
        const newPrice= action.ProName.Price
        return{
            ...state,
           price: state.price + newPrice
        }
        default:
            return state
    }
}



export default reducer