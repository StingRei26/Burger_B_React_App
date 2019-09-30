import React, { Component } from 'react';
import Aux  from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3, 
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0, 
            bacon: 0, 
            cheese: 0, 
            meat: 0
        }, 

        totalPrice: 4,
        purchasable: false, 
        purchasing: false

    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
         .map(igKey => {
             return ingredients[igKey]; 
         })
         .reduce((sum, el) =>{
             return sum + el;
         }, 0);

         this.setState({purchasable: sum > 0})
    }

    // To add Ingredients 
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCount; 
        // to add the total price based on the INGREDIENT_PRICE above
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice + priceAddition; 
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    // To reduce Ingredients 

    removeIngredientHandle =  (type) => {
        const oldCount = this.state.ingredients[type]; 
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCount; 
        // to reduce the total price based on the INGREDIENT_PRICE above
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice - priceDeduction; 
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    // to open modal 
    purchaseHandler = () => {
        this.setState({purchasing: true}); 
    }
    
    // to close modal and backdrop 
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchasContinueHandler = () => {
        alert('You Continue!');
    }


    render () { // lets React know what to render to the dom
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
    
        return (
   
         <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler} 
                    purchaseContinued={this.purchaseContinueHandler}/>
           
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandle}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
         </Aux>

        ); 
    }
}

export default BurgerBuilder; 