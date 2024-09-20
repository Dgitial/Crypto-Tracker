import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      // Log the entire response to see what data is returned
      console.log("API Response:", response.data);

      // Correctly return the data based on priceType (like 'prices', 'market_cap', etc.)
      if (response.data && response.data[priceType]) {
        console.log(`Data for ${priceType}:`, response.data[priceType]);
        return response.data[priceType]; // Return the specific price type
      } else {
        console.error(`No data found for priceType: ${priceType}`);
        return []; // Return empty array if the data is not available
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
      return []; // Return an empty array in case of an error
    });
};
