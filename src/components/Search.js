import React from "react";
import { Component } from "react";

export default class Seacrh extends Component {
    
 render() {
    const {handleChange, handleSubmit, search} = this.props;

    return (
    
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                    <h1 className="text-slanted text-capitalize">You can search for recipes here</h1>
                    <form className="mt-4">
                        <label htmlFor="search" className="text-capitalized">
                            search recipes separated by comma 
                        </label>
                        <div className="input-group">
                            <input type="text" 
                                   placeholder="chiken,onions,carrots" 
                                   name="search" 
                                   className="form-control"
                                   value = {search}
                                   onChange = {handleChange}  /> 
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary" onClick = {handleSubmit}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
 }  
}
