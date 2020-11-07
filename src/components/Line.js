import React from "react";

const Line = ({ emoji, style, setStyle }) => {
  return (
    <>
      <div
        onClick={() =>
          navigator.clipboard.writeText(emoji.symbol).then(() => {
            alert("copied");
          })
        }
        className="line"
      >
        <span>
          {emoji.symbol} {emoji.title}
        </span>
        <div
          onMouseEnter={(e) => {
            setStyle({ display: "flex" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <p> style={style} Click to copy! </p>
        </div>
        <br />
      </div>
    </>
  );
};

export default Line;
