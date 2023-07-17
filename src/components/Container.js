import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "horizontal", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  //to see what type of HTML the cild is
  console.log(children[0].type);

  const containerStyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div className={`container ${textPosition}`} style={containerStyle}>
      {header ? <h2>{header}</h2> : null}

        {children[0]}
      </div>
  );
}

export default Container;
