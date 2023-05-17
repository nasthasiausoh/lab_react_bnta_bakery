const Cake = ({info}) => {


  const newIngredientsList = info.ingredients.map((ingredients) => {
    return <li>{ingredients}</li>
  });


  return (
    <>
    {/* PROPS */}

        <h2>{info.cakeName}</h2>
        <p>This cake has an average rating of {info.rating}. </p>
        {/* The rest of the elements for the first MVP bullet point: */}
        {/* <p>Name: {cake.cakeName}</p> */}
        {/* <p>Ingredients: {cake.ingredients.join(", ")}</p> */}
        {/* <p>Price: {cake.price}</p> */}

        {/* Third bullet point in the MVP:  */}
        
        <p> Ingredients list for a {info.cakeName}: </p>
        <ul> {newIngredientsList}</ul>
          {/* <ul>{cake.ingredients}</ul> */}



    </>
  )
}

export default Cake;