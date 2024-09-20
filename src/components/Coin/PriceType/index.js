import { useState } from "react";
import "./styles.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function TogglePriceType({ priceType, handlePricesTypeChange }) {
  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePricesTypeChange}
        sx={{
          "& .Mui-selected": {
            color: "var(--yellow) !important",
          },
          borderColor: "var(--yellow)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--yellow)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--yellow)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market-Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total-Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
