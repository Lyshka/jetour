import { Route, Routes } from "react-router-dom";

import {
  Contacts,
  Credit,
  Guarantee,
  Main,
  Model,
  NewsAll,
  Service,
  TradeIn,
} from "./pages";
import { Footer, Header } from "./Components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<Model />} />
      </Routes>
        <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tradein" element={<TradeIn />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/newsall" element={<NewsAll />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
