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
import BoshOgrigi from "./components/alomatlar/elements/boshogrigi/boshogrigi";
import KyupenA from "./components/alomatlar/elements/boshogrigi/kyupen";
import SineparA from "./components/alomatlar/elements/boshogrigi/sinepar";
import Lorotin from "./components/alomatlar/elements/allergiya/lorotin";
import Diozalin from "./components/alomatlar/elements/allergiya/diozalin";
import AllerG from "./components/alomatlar/elements/allergiya/allerG";
import QuruqYotal from "./components/alomatlar/elements/yotal/quruqYotal/yotal";
import Askoril from "./components/alomatlar/elements/yotal/quruqYotal/askoril";
import KoEks from "./components/alomatlar/elements/yotal/quruqYotal/koEks";
import Kodelak from "./components/alomatlar/elements/yotal/quruqYotal/kodelak";
import Linkas from "./components/alomatlar/elements/yotal/quruqYotal/linkas";
import Sinekod from "./components/alomatlar/elements/yotal/quruqYotal/sinekod";
import NamYotal from "./components/alomatlar/elements/yotal/namYotal/namYotal";
import Bronxil from "./components/alomatlar/elements/yotal/bronxil/bronxil";
import Ambroksol from "./components/alomatlar/elements/yotal/namYotal/ambroksoll";
import Alteyka from "./components/alomatlar/elements/yotal/namYotal/alteyka";
import Ass from "./components/alomatlar/elements/yotal/namYotal/ass";
import Bromgeksin from "./components/alomatlar/elements/yotal/namYotal/bromgeksin";
import Prospan from "./components/alomatlar/elements/yotal/namYotal/prospan";
import Budekton from "./components/alomatlar/elements/yotal/bronxil/budekton";
import Forales from "./components/alomatlar/elements/yotal/bronxil/forales";
import Singlon from "./components/alomatlar/elements/yotal/bronxil/singlon";
import Salbutamol from "./components/alomatlar/elements/yotal/bronxil/salbutamol";
import Ventolin from "./components/alomatlar/elements/yotal/bronxil/ventolin";
import Yurak from "./components/alomatlar/yurak/yurak";
import AsabTizimi from "./components/alomatlar/yurak/asabTizimi";
import Vitaminlar from "./components/alomatlar/yurak/vitaminlar";
import Alotendin from "./components/alomatlar/yurak/alotendin";
import Anaprilin from "./components/alomatlar/yurak/anaprilin";
import Karditon from "./components/alomatlar/yurak/karditon";
import Veroshpiron from "./components/alomatlar/yurak/veroshpiron";
import NovoPassit from "./components/alomatlar/yurak/NovoPassit";
import Korvalol from "./components/alomatlar/yurak/korvalol";
import Fenibut from "./components/alomatlar/yurak/fenibut";
import Afabazol from "./components/alomatlar/yurak/afabazol";
import Askorbinka from "./components/alomatlar/yurak/askorbinka";
import Elevitpronatal from "./components/alomatlar/yurak/elevitpronatal";
import Omega from "./components/alomatlar/yurak/omega3";
import Pivishan from "./components/alomatlar/yurak/pivishan";
import Toufon from "./components/alomatlar/yurak/toufon";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeCont />} />
        <Route path="/alomatlar-boyicha" element={<Alomat />} />
        <Route path="/nomi-boyicha" element={<NomBoyicha />} />
        <Route path="/kategoriya-boyicha" element={<KategoriyBoyicha />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/save" element={<HomeMenu />} />
        <Route path="/day" element={<Days />} />
        <Route path="/add" element={<Save />} />
        <Route path="/yotal" element={<Elementone />} />
        <Route path="/bosh-ogrigi" element={<Elementtwo />} />
        <Route path="/allergiya" element={<Elementthree />} />
        <Route path="/kalsiy" element={<ElementNom />} />
        <Route path="/yodomarin" element={<ElementNomTwo />} />
        <Route path="/magniy" element={<ElementNomThree />} />
        <Route path="/trimol" element={<BoshOgrigi />} />
        <Route path="/kyupen" element={<KyupenA />} />
        <Route path="/sinepar" element={<SineparA />} />
        <Route path="/lorotadin" element={<Lorotin />} />
        <Route path="/diazolin" element={<Diozalin />} />
        <Route path="/aller-g" element={<AllerG />} />
        <Route path="/quruq-yotal" element={<QuruqYotal />} />
        <Route path="/askoril" element={<Askoril />} />
        <Route path="/ko-eks" element={<KoEks />} />
        <Route path="/kodelak" element={<Kodelak />} />
        <Route path="/linkas" element={<Linkas />} />
        <Route path="/sinekod" element={<Sinekod />} />
        <Route path="/nam-yotal" element={<NamYotal />} />
        <Route path="/ambroksol" element={<Ambroksol />} />
        <Route path="/alteyka" element={<Alteyka />} />
        <Route path="/ass" element={<Ass />} />
        <Route path="/bromgeksin" element={<Bromgeksin />} />
        <Route path="/prospan" element={<Prospan />} />
        <Route path="/bronxial-astma" element={<Bronxil />} />
        <Route path="/budekton" element={<Budekton />} />
        <Route path="/forales" element={<Forales />} />
        <Route path="/singlon" element={<Singlon />} />
        <Route path="/salbutamol" element={<Salbutamol />} />
        <Route path="/ventolin" element={<Ventolin />} />
        <Route path="/yurak" element={<Yurak />} />
        <Route path="/alotendin" element={<Alotendin />} />
        <Route path="/anaprilin" element={<Anaprilin />} />
        <Route path="/karditon" element={<Karditon />} />
        <Route path="/venodiol" element={<Ventolin />} />
        <Route path="/veroshprion" element={<Veroshpiron />} />
        <Route path="/asab-tizimi" element={<AsabTizimi />} />
        <Route path="/novo-passit" element={<NovoPassit />} />
        <Route path="/anaprilin" element={<Anaprilin />} />
        <Route path="/korvalol" element={<Korvalol />} />
        <Route path="/fenibut" element={<Fenibut />} />
        <Route path="/afabazol" element={<Afabazol />} />
        <Route path="/vitaminlar" element={<Vitaminlar />} />
        <Route path="/askorbinka" element={<Askorbinka />} />
        <Route path="/elevit-pronatal" element={<Elevitpronatal />} />
        <Route path="/omega-3" element={<Omega />} />
        <Route path="/pivishan" element={<Pivishan />} />
        <Route path="/toufon" element={<Toufon />} />
      </Routes>
    </>
  )
}

export default App;