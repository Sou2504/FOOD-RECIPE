import React from "react";

const Header = ({children, title, styleClass}) => {
    return (
        <header>
            <div className="container-fluid">
                <div className={`row align-items-center  ${styleClass}`}>
                    <div className="col text-center ">
                        <h1 className="letter-spacing text-slanted text-uppercase display-3 text-light">
                            {title}
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </header>
  
    )
}

Header.defaultProps = {
    title: 'default title',
    styleClass: 'header-hero'

};

export default Header;