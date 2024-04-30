'use server';
import Link from "next/link";
import Image from "next/image";

const getSingleDrink = async (id) => {
    const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        if(!drink.ok) {
            throw new Error("Error Fetching the Drink!");
        }
    return drink.json();
}

const SingleDrinkPage = async ({params}) => {
    const {drinks} = await getSingleDrink(params.id);
    return (
    <div className="mt-5">
        <Image src={drinks[0].strDrinkThumb} className="w-96 rounded-md mx-auto" width={300} height={300} alt={drinks[0].strDrink}></Image>
        <div className="text-3xl text-center">{drinks[0].strDrink}</div>
    </div>
  )
}
export default SingleDrinkPage