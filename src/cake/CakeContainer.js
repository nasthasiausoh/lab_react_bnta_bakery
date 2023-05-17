import { useState } from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				  rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

  return (
    <>
		<h2>BNTA Bakery Items:</h2>
		<Cake info = {listOfCakes[0]} setInfo = {setListOfCakes[0]} />
        <Cake info = {listOfCakes[1]} setInfo = {setListOfCakes[1]}/>
        <Cake info = {listOfCakes[2]} setInfo = {setListOfCakes[2]}/>

		<CakeForm />
    </>
);
}

export default CakeContainer;