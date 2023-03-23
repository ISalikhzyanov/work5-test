import React from 'react';
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MyMarkets from "./pages/MyMarkets";
import PromoMaterials from "./pages/PromoMaterials";
import Statistic from "./pages/Statistic";
import Balance from "./pages/Balance";
import Personal from "./pages/Personal";
import Faq from "./pages/Faq";
import Support from "./pages/Support";
import Location from "./components/Location";
import MobileNavigation from "./components/MobileNavigation";

function App() {
  return (
    <div className="page">
        <Navigation />
        <MobileNavigation />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/markets" element={ <MyMarkets /> } />
            <Route path="/promo" element={ <PromoMaterials /> } />
            <Route path="/statistic" element={ <Statistic /> } />
            <Route path="/balance" element={ <Balance /> } />
            <Route path="/personal" element={ <Personal /> } />
            <Route path="/faq" element={ <Faq /> } />
            <Route path="/support" element={ <Support /> } />
        </Routes>
    </div>
  );
}

export default App;
