import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return(
     <Header title="amazing recipes">
        <Link to="/recipes" className="text-uppercase btn btn-secondary bt-lg mt-3 ">Search Recipes</Link>
        
    </Header>
    )
};

export default Home;