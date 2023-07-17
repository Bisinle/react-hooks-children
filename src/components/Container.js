import React from "react";

function Container({
  header,
  children,
  textPosition = "left", // possible values: left, right, center
  direction = "vertical", // possible values: vertical, horizontal
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

      <div
        className={`container-children ${direction}  ${contentPosition}`}
      >
        {children}
      </div>
    </div>
  );
}

/*our app renders two container with different data
one with the "this is an example content"
and the other with the turtle image */
export default Container;
