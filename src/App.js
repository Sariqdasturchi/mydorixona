import Alomat from "./components/alomatlar/al";
import KategoriyBoyicha from "./components/alomatlar/kg";
import NomBoyicha from "./components/alomatlar/nm";
import HomeCont from "./components/home/home";
import HomeMenu from "./components/home_menu/homeMenu";
import Login from "./components/login/login";

import { Route, Routes } from 'react-router-dom'
import Profile from "./components/profil/profile";
import Save from "./components/save/save";
import Days from "./components/days/day";
import Add from "./components/add/add";
import Elementone from "./components/alomatlar/elements/elementone";
import Elementtwo from "./components/alomatlar/elements/elementtwo";
import Elementthree from "./components/alomatlar/elements/elementthree";
import ElementNom from "./components/alomatlar/elements/elementNom";
import ElementNomTwo from "./components/alomatlar/elements/elementNomTwo";
import ElementNomThree from "./components/alomatlar/elements/elementNomThree";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeCont />} />
        <Route path="/home-menu" element={<HomeMenu />} />
        <Route path="/alomatlar-boyicha" element={<Alomat />} />
        <Route path="/nomi-boyicha" element={<NomBoyicha />} />
        <Route path="/kategoriya-boyicha" element={<KategoriyBoyicha />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/save" element={<Save />} />
        <Route path="/day" element={<Days />} />
        <Route path="/add" element={<Add />} />
        <Route path="/yotal" element={<Elementone />} />
        <Route path="/bosh-ogrigi" element={<Elementtwo />} />
        <Route path="/allergiya" element={<Elementthree />} />
        <Route path="/kalsiy" element={<ElementNom />} />
        <Route path="/yodomarin" element={<ElementNomTwo />} />
        <Route path="/magniy" element={<ElementNomThree />} />
      </Routes>
    </>
  )
}

export default App;