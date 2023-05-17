import { useState } from "react";
import cakes from "../cakes";


const CakeForm = ({info, setInfo}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("")
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");


// Need to correct logic for handleValidation() and handleFormSubmit(): 

//     const handleValidation = () => {

//         let errorMessage = "";

//         if(cakes.find((cakeName) => cakes.cakeName === cakes.cakeName)) {
//             errorMessage = "This cake name already exists!"
//         }

//         if(cakes.find((ingredients) => cakes.ingredients === cakes.ingredients)) {
//             errorMessage = "This list of ingredients already exists!"
//         }

//         // if(info.find((ingredients) => info.ingredients === ingredients)) {
//         //     errorMessage = "This list of ingredients already exists!"
//         // }
        

//         if(cakeName === "" || ingredients === "" || price === "" || rating === "" ) {
//             errorMessage = "Please fill in all fields!"
//         }

//         setError(errorMessage);

//         return errorMessage !== "";
//     }


//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if(!handleValidation()) {

//             const updateCakes = [...cakes]; // or use [...info]

//             const newCake = {
//             cakeName : cakeName,
//             ingredients : ingredients.split(", "),
//             price : price,
//             rating : rating
//         }

//         updateCakes.push(newCake);
//         setInfo(updateCakes);
//     }
// }



    return (
        <>
        <h2>Add a new cake to the bakery: </h2>
        {/* <form onSubmit = {handleFormSubmit} > */}
        < form >
            <input 
            type = "text"
            name = "cake name"
            placeholder = "Cake's name"
            value = {cakeName}
            onChange = { (e) => setCakeName(e.target.value)} />

            <input 
            type = "text"
            name = "ingredients"
            placeholder = "Ingredients"
            value = {ingredients} // check if i implemented the split properly.
            onChange = { (e) => setIngredients(e.target.value)} />

            <input 
            type = "text"
            name = "price"
            placeholder = "Price"
            value = {price}
            onChange = { (e) => setPrice(e.target.value)} />

            <input 
            type = "text"
            name = "rating"
            placeholder = "Rating"
            value = {rating}
            onChange = { (e) => setRating(e.target.value)} />
            <input type =  "submit" value = "Submit" />
            
        </form>

        <p> {error} </p>      
    </>
 );
};

export default CakeForm;