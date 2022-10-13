import Home from "./routes/Home/Home.components";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.components";
import Shop from "./routes/Shop/Shop.components";
import Authenthication from "./routes/Authenthication/Authenthication";
import Checkout from "./routes/Checkout/Checkout.components";

// redux
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  // get CURRENT USER
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // NOT REQUIRED, it is to remove lint warnings

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authenthication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
