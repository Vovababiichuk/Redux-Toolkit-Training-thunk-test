// import PropTypes from "prop-types";
// import styles from "./RecipeItem.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorites } from "../store/favorites/favorites.slice";

// const RecipeItem = ({ recipe }) => {
//   const favorites = useSelector((state) => state.favorites.recipesList);
//   const dispatch = useDispatch();
//   const isFavorite = favorites.some((fav) => fav.id === recipe.id);

//   const handleToggleFavorite = () => {
//     dispatch(toggleFavorites(recipe));
//   };

//   return (
//     <div className={styles.item}>
//       <h2 className={styles.title}>{recipe.name}</h2>
//       <button className={styles.btn} onClick={handleToggleFavorite}>
//         {isFavorite ? "Remove from favorites" : "Add to favorites"}
//       </button>
//     </div>
//   );
// };

// RecipeItem.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default RecipeItem;

//! with use custom hooks useActions and useSFavorites

import PropTypes from "prop-types";
import styles from "./RecipeItem.module.scss";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const { toggleFavorites } = useActions();

  const handleToggleFavorite = () => {
    toggleFavorites(recipe);
  };

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{recipe.name}</h2>
      <button className="btn" onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeItem;
