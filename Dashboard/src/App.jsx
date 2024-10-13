import { useContext } from 'react';
import './App.css'
import Home from './components/Home'
import userContext, { UserContextProvider } from "./components/UserContext";
function App() {
  const {user,updateUser} = useContext(userContext);
  console.log(user);
  return (
    <>
      <Home />
    </>
  )
}

export default App
