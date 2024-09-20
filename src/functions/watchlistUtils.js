// src/utils/watchlistUtils.js

export const saveToLocalStorage = (watchlist) => {
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
};

export const getFromLocalStorage = () => {
  const storedList = localStorage.getItem('watchlist');
  return storedList ? JSON.parse(storedList) : [];
};

export const addToWatchlist = (coin, watchlist, setWatchlist, toast) => {
  if (!watchlist.some(item => item.id === coin.id)) {
    const updatedWatchlist = [...watchlist, coin];
    setWatchlist(updatedWatchlist);
    saveToLocalStorage(updatedWatchlist);
    toast.success(`${coin.name} added to watchlist!`);
  } else {
    toast.info(`${coin.name} is already in your watchlist.`);
  }
};
