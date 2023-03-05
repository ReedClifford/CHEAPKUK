import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <section className="bg-gradient-to-tr from-neutral-900 to-black text-neutral-300">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;
