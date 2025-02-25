import React from "react";
import Ingredient from "./Ingredients.js";
export default function IngredientsList({ list }) {
return (
<ul className="ingredients">
{list.map((ingredient, i) => (
<Ingredient key={i} {...ingredient} />
))}
</ul>
);
}
