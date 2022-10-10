import Home from "./routes/Home/Home.components";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation/Navigation.components";
import Shop from "./routes/Shop/Shop.components";
import Authenthication from "./routes/Authenthication/Authenthication";
import Checkout from "./routes/Checkout/Checkout.components";



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path='auth' element={<Authenthication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
