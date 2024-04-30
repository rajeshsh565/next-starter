import DrinksList from "@/components/DrinksList"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
const fetchDrinks = async () => {
  const drinks = await fetch(url);
  if(!drinks.ok){
    throw new Error("Error Fetching Drinks...");
  }
  return drinks.json();
}

const DrinksPage = async () => {
  const {drinks} = await fetchDrinks();
  return (
    <div className="text-5xl">
      <DrinksList drinks={drinks}/>
    </div>
  )
}
export default DrinksPage