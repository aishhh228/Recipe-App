import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const APP_ID = '882abf07';
  const APP_KEY ='e02f44b728a89c3dcc89dcaef41f3d17';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( ()=>{
   getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return(
    
    <div className="App">
      <h1 className="title-bar">Yummly</h1>
     <form  onSubmit={getSearch} className="search-form">
       <input className="search-bar"  type="text" value={search} onChange={updateSearch}/>
        <button  className="hvr-sweep-to-top"  type="submit">
        Search
        </button>
     </form>
     <div className="recipes">
     {recipes.map(recipe =>( 
       <Recipe 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       
       />
     ))}
     </div>
    </div>
  );
};

export default App;
