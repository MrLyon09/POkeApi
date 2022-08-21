import React, { useState } from "react";
import { SearchPokemon } from "./Api";


const Search = () => {
  const [Search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  
  const onChange = (e) => {
    setSearch(e.target.value);
    
  };

  const Click = async (e) => {
    const data = await SearchPokemon(Search);
    setPokemon(data);
  };


  return (
    <div className="Searchbar-container">
      
      <div className="Searchbar">
        <input placeholder="Search a Pokemon" onChange={onChange}
        
         />
      </div>
      
      <div className="Searchbar-btn">
        <button onClick={Click}>Buscar</button>
      </div>
      <br />
      <div className="display-pokemon">
      
        <div>
        {pokemon &&
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div className="name-poke">{pokemon.name} </div>   
            <div>type: {pokemon.types[0].type.name} </div>
            <div>weight: {pokemon.weight} </div>       
            <br/>
            <div className="poke-img">
              <img src={pokemon.sprites.other.dream_world.front_default} alt=""/>
            </div>
            
            
          </div>
          
        }

        </div>

      </div>



      

    </div>
    

  );
};

export default Search;
