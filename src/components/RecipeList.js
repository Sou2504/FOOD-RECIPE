import { render } from "@testing-library/react";
import React from "react";
import Recipe from "./Recipe";
import { Component } from "react";

export default class RecipeList extends Component {
    
  render() {
    const { recipes } = this.props;
    return(
        <>
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                    <h1 className="text-slanted">Recipe List</h1>
                </div>
            </div>
            <div className="row">
                {recipes?.map(recipe => (
                    <Recipe key={recipe.recipe_id} recipe={recipe}/>
                ))}

            </div>
        </div>
        
               
        </>
       
    )
  } 
}
