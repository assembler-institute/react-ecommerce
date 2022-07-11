import App from "./App";
import { BrowserRouteras, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login.jsx";


const Router = () => {
  return ( 
  <BrowserRouteras>
<Routes>
    <Route path="/" element={<App />} />
    <Route path="/Login" elemnt={<Login />} />
</Routes>
  </BrowserRouteras>
    );
};

export default Router;