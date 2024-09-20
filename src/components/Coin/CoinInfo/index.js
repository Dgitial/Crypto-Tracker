import React, { useState } from "react";
import "./styles.css";
function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 300) + "<p style='color:var(--grey)'> Read More...</p>";
  const longDesc = desc + "<p style='color:var(--grey)'> Less More...</p>";

  const [flag, setFlag] = useState(false);
  return (
    <div>
      <div className="grey-wrapper">
        <h2 className="coin-info-heading">{heading}</h2>
        {desc.length > 200 ? (
          <p
            onClick={() => setFlag(!flag)}
            className="coin-info-desc"
            dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
          />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: desc }} />
        )}
      </div>
    </div>
  );
}

export default CoinInfo;
