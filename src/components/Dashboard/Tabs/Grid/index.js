import React, { useState, useEffect } from "react";
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded"; // Import filled star
import { toast } from "react-toastify";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../../functions/watchlistUtils"; // Use utility functions for localStorage handling

function Grid({ coin }) {
  const [watchlist, setWatchlist] = useState(getFromLocalStorage());
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Check if the coin is in the watchlist
  useEffect(() => {
    const inWatchlist = watchlist.some((item) => item.id === coin.id);
    setIsInWatchlist(inWatchlist);
  }, [watchlist, coin.id]);

  // Handle adding/removing the coin to/from the watchlist
  const handleAddToWatchlist = () => {
    if (!isInWatchlist) {
      const updatedWatchlist = [...watchlist, coin];
      setWatchlist(updatedWatchlist);
      saveToLocalStorage(updatedWatchlist); // Save updated list to localStorage
      toast.success(`${coin.name} added to watchlist!`);
    } else {
      const updatedWatchlist = watchlist.filter((item) => item.id !== coin.id);
      setWatchlist(updatedWatchlist);
      saveToLocalStorage(updatedWatchlist); // Save updated list to localStorage
      toast.info(`${coin.name} removed from watchlist.`);
    }
    setIsInWatchlist(!isInWatchlist); // Toggle the state
  };

  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img
            src={coin.image}
            className="coin-logo"
            alt={`${coin.name} logo`}
          />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total_volume">
            Total Volume: {coin.total_volume.toLocaleString()}
          </p>
          <p className="total_volume">
            Market Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
        <div className="watchlist-icon">
          {isInWatchlist ? (
            <StarRoundedIcon
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)", // Filled star color based on price change
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault(); // Prevent the link from navigating
                handleAddToWatchlist(); // Remove from watchlist on click
              }}
            />
          ) : (
            <StarBorderRoundedIcon
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)", // Outlined star color based on price change
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault(); // Prevent the link from navigating
                handleAddToWatchlist(); // Add to watchlist on click
              }}
            />
          )}
        </div>
      </div>
    </Link>
  );
}

export default Grid;
