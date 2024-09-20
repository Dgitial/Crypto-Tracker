import "./App.css";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import WatchListPage from "./pages/WatchListPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
