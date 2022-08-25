import React, { useState, useEffect} from 'react';
import RecipeForm from './RecipeForm';
// import Search from './Search';
import RecipeCard from './RecipeCard';
// import Filter from './Filter';
// import CocktailCard from './CocktailCard'
// import FetchedCard from '../styles/StyledFetchedCard'
//Plan: take out API- allow for post/get of own RESTful data , THEN if needed, re-encorporate API
//Can get forms state to reset but not the inputs themselves, was ommitting handleChange for the input AND the value={state}- FIXED NOW A CONTROLLED FORM
//MIN 5 components required AND cannot rely on redirect to load --> add API and or search to satisfy component requirement
//PLAN for 8/24: show updated list when form is submitted to avoid any redirects to load data- moving to list
//parent of Search(search recipeList by alcohol toggle-super ez), RecipeForm(), RecipeCard, RecioeFilter

const RecipeContainer = () => {
  const [recipeList, setRecipeList] = useState([]); //just adding to state lets it pop on page.
  // const [selectedCategory, setSelectedCategory] = useState("All")//alcoholic vs non, 
  const [search, setSearch] = useState("") //search by drink name

  
  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then(resp => resp.json())
      .then((recipe) => {setRecipeList(recipe)
        // console.log(recipe)
      })
      
  }, [])

  const recipeCards = recipeList.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
  //only place allowed to change state- list will have search, that allows us to update search state?
  
  function handleAddRecipe(newrecipe) {
    setRecipeList([...recipeList, newrecipe]) //add state to frontend react reacts to change of state. 
  }

//  const recipesToDisplay = () => {
//   return recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
//  }
  //   const recipesToDisplay = recipeList.filter((recipe) => selectedCategory === "All" || recipe.name === selectedCategory)
  // .filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))

  // console.log(recipeList)
// const filteredRecipes = () => {
//   return recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
// }

  // function handleCategoryChange(e){
  //   setSelectedCategory(e.target.value)
  // }
  // function handleRecipeChange(e){
  //   setSelectedCategory(e.target.value)
  // }


  return (
   <div>
    {/* <Search search={search} onSearchChange={setSearch} /> */}
    {/* <Filter onCategoryChange={handleCategoryChange}/> */}
    <RecipeForm  onAddRecipe={handleAddRecipe}/>
    <div> {recipeCards}</div>
    
    {/* <ul>
      {recipesToDisplay().map((recipe) => (
        <RecipeCard 
        recipeList={recipeList}
        recipe={recipe}
        key={recipe.id}
        name={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        amount={recipe.amount}
        />
      ))}
    </ul> */}
   </div>
  )
}

export default RecipeContainer;
// recipesList={recipesList} setRecipesList={setRecipesList} recipesToDisplay={recipesToDisplay}
  // const [newrecipe, setnewRecipe] = useState([{
  //     name: '',
  //     amount: '',
  //     ingredients: '',
  //     instructions: ''
  // }])
  // const handleChange = (e) => {
  //   setnewRecipe({
  //     ...newrecipe, [e.target.name]: e.target.value
  //   })
  // }
  // const [cocktail, setCocktail] = useState({
  // })
  // useEffect(() => {
  //   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  //   .then(r => r.json())
  //   .then(data => {
  //     setCocktail({
  //       strDrink: data.drinks[0].strDrink,
  //       strGlass: data.drinks[0].strGlass,
  //       strInstructions: data.drinks[0].strInstructions,
  //       strIngredient1: data.drinks[0].strIngredient1,
  //       strIngredient2: data.drinks[0].strIngredient2,
  //       strIngredient3: data.drinks[0].strIngredient3,
  //       strIngredient4: data.drinks[0].strIngredient4,
  //       strIngredient5: data.drinks[0].strIngredient5,
  //       strMeasure1: data.drinks[0].strMeasure1,
  //       strMeasure2: data.drinks[0].strMeasure2,
  //       strMeasure3: data.drinks[0].strMeasure3,
  //       strMeasure4: data.drinks[0].strMeasure4,
  //       strMeasure5: data.drinks[0].strMeasure5,
  //       strDrinkThumb: data.drinks[0].strDrinkThumb
  //     })
  //   })
  // }, []) return <FetchedCard><CocktailCard drinks={cocktail}/></FetchedCard>
    // const handleChange = (e) => {
  //   setName(e.target.value)
  // }
  // const handleClick = () => {
  //   setNames([...names, name])
  //   setName("")
  // }const [names, setNames] = useState([]) value={name} onChange={(e) => handleChange(e)}