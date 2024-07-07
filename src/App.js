import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import './style.css';
import Header2 from "./components/Header2";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />

        </Route>
          <Route path="/Page3" element={<Header2 />}>
          <Route path="/Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />

        </Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
