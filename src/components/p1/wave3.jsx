function Wave3({
    position = "bottom",
    color = "#0099ff",
    height = "120px",
    offset = "0px", // valor padrão
  }) {
    return (
      <div
        style={{
          position: "absolute",
          [position]: offset, // usa o valor do offset como top ou bottom
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          width="100%"
          height={height}
          preserveAspectRatio="none"
          style={{
            display: "block",
            transform: position === "top" ? "rotate(180deg)" : "none",
          }}
        >
          <path
            fill={color}
            d="
              M0,160 
              C 70,240 135,80 205,160 
              C 275,240 340,80 410,160 
              C 480,240 545,80 615,160 
              C 685,240 750,80 820,160 
              C 890,240 955,80 1025,160 
              C 1095,240 1160,80 1230,160 
              C 1300,240 1365,80 1440,160 
              L1440,320 
              L0,320 
              Z
            "
          />
        </svg>
      </div>
    );
  }
  
  export default Wave3;