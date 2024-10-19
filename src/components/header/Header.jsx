import { Heart } from "lucide-react";
import styles from "./Header.module.scss";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <Heart size={32} color="white" />
      <span className={styles.count}>{favorites.length}</span>
    </header>
  );
};

export default Header;
