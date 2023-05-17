const Cake = ({cake}) => {


  const newIngredientsList = cake.ingredients.map((ingredients) => {
    return <li>{ingredients}</li>
  });


  return (
    <>
    {/* PROPS */}

        <h2>{cake.cakeName}</h2>
        <p>Rating: {cake.rating}</p>
        {/* The rest of the elements for the first MVP bullet point: */}
        {/* <p>Name: {cake.cakeName}</p> */}
        {/* <p>Ingredients: {cake.ingredients.join(", ")}</p> */}
        {/* <p>Price: {cake.price}</p> */}

        {/* Third bullet point in the MVP:  */}
        
        <p>Ingredients list:</p>
        <ul> {newIngredientsList}</ul>
          {/* <ul>{cake.ingredients}</ul> */}



    </>
  )
}

export default Cake;