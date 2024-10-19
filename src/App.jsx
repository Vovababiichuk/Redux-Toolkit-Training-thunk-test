import RecipeItem from "./components/recipe-item/RecipeItem";
import Header from "./components/header/Header";
import UserTest from "./components/userTest/UserTest";
import { recipes } from "./recipe.data";

const App = () => {
  return (
    <div>
      <Header />
      <UserTest />
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
