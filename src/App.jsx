import { Route, Routes, useParams } from "react-router-dom";

import {
  Cars,
  Contacts,
  Credit,
  Guarantee,
  Main,
  Model,
  NewsAll,
  Service,
  TradeIn,
} from "./pages";
import { Footer, Header, NewsSingle } from "./Components";

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
        <Route path="/:id" element={<Model />} />
        <Route path="/:id/:car" element={<Cars />} />
        <Route path="/newsall/:news" element={<NewsSingle />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
