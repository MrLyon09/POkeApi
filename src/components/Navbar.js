import React from "react";

const Navbar = () => {
  let imgLogo = "https://unite.pokemon.com/images/common/en-us/unite-logo.png";
  return (
    <nav>
      <div>
        <div>
          <img src={imgLogo} alt="pokeapi-logo" className="navbar-img" />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
