export const coinObject = (setState, data) => {
  if (!data) {
    console.error("No data provided to coinObject");
    return;
  }

  setState({
    id: data.id || null,
    name: data.name || "Unknown",
    symbol: data.symbol || "N/A",
    image: data.image?.large || "default_image_url.png", // Provide a default image URL if undefined
    desc: data.description?.en || "No description available", // Provide a fallback description
    price_change_percentage_24h:
      data.market_data?.price_change_percentage_24h || 0,
    total_volume: data.market_data?.total_volume?.usd || 0, // Use optional chaining to safely access nested properties
    market_cap: data.market_data?.market_cap?.usd || 0,
    current_price: data.market_data?.current_price?.usd || 0,
  });
};
