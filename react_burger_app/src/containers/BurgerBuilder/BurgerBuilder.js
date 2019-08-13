import React, { Component } from 'react';
import Aux  from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

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

        totalPrice: 4

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
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandle}
                    disabled={disabledInfo}/>
 
         </Aux>

        ); 
    }
}

export default BurgerBuilder; 