import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import { toast } from "react-toastify"; // Import Toastify for notifications
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css"; // Import styles if necessary

function WatchListPage() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const storeWatchList = localStorage.getItem("watchlist");
    if (storeWatchList) {
      setWatchList(JSON.parse(storeWatchList));
    }
  }, []);

  const removeFromWatchlist = (coinId) => {
    const updatedWatchlist = watchList.filter((coin) => coin.id !== coinId);
    setWatchList(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    toast.success("Coin removed from watchlist!");
  };

  

  return (
    <div>
      <Header />
      <h1>Watchlist</h1>
      {watchList.length > 0 ? (
        <ul>
          {watchList.map((coin) => (
            <li
              key={coin.id}
              className={`coin-item ${
                coin.price_change_percentage_24h < 0 ? "red" : "green"
              }`}
            >
              <div className="coin-info">
                <img
                  src={coin.image}
                  alt={`${coin.name} logo`}
                  className="coin-logo"
                />
                <span>
                  {coin.name} ({coin.symbol})
                </span>
                <span>${coin.current_price.toLocaleString()}</span>
                {coin.price_change_percentage_24h > 0 ? (
                  <TrendingUpIcon style={{ color: "var(--green)" }} />
                ) : (
                  <TrendingDownIcon style={{ color: "var(--red)" }} />
                )}
                <button onClick={() => removeFromWatchlist(coin.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No coins in watchlist</p>
      )}
    </div>
  );
}

export default WatchListPage;
