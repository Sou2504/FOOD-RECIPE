import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Default = () => {
    return(
        <Header title="404 ERROR" styleClass='default-hero'>
          <h2 className="text-light text-uppercase">You are looking for the wrong page</h2>
          <Link to='/' className="btn btn-secondary btn-lg text-uppercase mt-3">return home</Link>

        </Header>
    )
};

export default Default;