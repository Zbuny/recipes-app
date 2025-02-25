import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Ошибка загрузки рецептов:", error));
  }, []);

  return <Menu recipes={recipes} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
