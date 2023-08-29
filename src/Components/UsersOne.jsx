//internal import
import useUserContext from "../hooks/useUserContext";
import UserOne from "./UserOne";
import style from "./users.module.css";

//code start from here
const UsersOne = () => {
  const { users } = useUserContext();
  return (
    <div className={style.users}>
      {users.map((user) => {
        return <UserOne key={users.id} user={user} />;
      })}
    </div>
  );
};

export default UsersOne;
