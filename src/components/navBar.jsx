import React from 'react';

const NavBar = ({totalGames}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Number Guessing{" "}
                <span className="badge badge-pill badge-primary">
                    LEVEL: {totalGames}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;