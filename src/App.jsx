//external import
//internal import
import "./App.css";
import NewUserOne from "./Components/NewUserOne";
import UsersOne from "./Components/UsersOne";
import { UserContextProvider } from "./context/UserContext";

//codes start from here
const App = () => {
  return (
    <UserContextProvider>
      <NewUserOne />
      <UsersOne />
    </UserContextProvider>
  );
};

export default App;
