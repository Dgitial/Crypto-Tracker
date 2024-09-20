import axios from "axios";

export const get100Coins = () => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((response) => {
      console.log("FULL RESPONSE >>>", response);
      return response.data; // Return the 100 coins data
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
      return []; // Return an empty array in case of an error
    });
};
