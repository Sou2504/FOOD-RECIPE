import React from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { Component } from "react";
import  recipeData   from "../data/tempList";

export default class Recipes extends Component  {
    
        constructor (props) {
            super(props);
            this.state = {
                repices: recipeData,
                search: ""
            };
        }
        
        handleChange = e => {
            this.setState({
                search: e.target.value
            });
        };
        handleSubmit = e => {
            e.preventDefault();
        };

        render(){
            return(
                <div>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <RecipeList recipes= {this.state.recipes}/>
                </div>
            )

        }

};
