import { Route, Routes } from "react-router-dom";

import {
  Admin,
  AdminMain,
  Cars,
  Contacts,
  Credit,
  Guarantee,
  Login,
  Main,
  Model,
  NewsAll,
  Photo,
  Service,
  TradeIn,
} from "./pages";
import {
  AboutAdminAdd,
  AboutAdminMain,
  Footer,
  Header,
  NewsSingle,
} from "./Components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tradein" element={<TradeIn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/newsall" element={<NewsAll />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-main" element={<AdminMain />} />
        <Route path="/admin-about-main/:about" element={<AboutAdminAdd />} />
        <Route path="/admin-about-main" element={<AboutAdminMain />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Model />} />
        <Route path="/:id/:car" element={<Cars />} />
        <Route path="/newsall/:news" element={<NewsSingle />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
