import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const UserTest = () => {
  const { isLoading, error, user } = useSelector((state) => state.user);

  const { getUserById } = useActions();

  return (
    <div>
      <button className="btn" onClick={() => getUserById(1)}>
        Get User
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>User: {user.name}</h1>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};

export default UserTest;
