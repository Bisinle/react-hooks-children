import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
      </Container>
      {/** the element defined inside th opening/closing tags are received as children 
       * props ans are access through props.children or destructured like we did
       * 
       * --the component will display to seperate data at the same time
       * so we succeeded in sending different data to the same component
       * and display them at the same time------COOOOOOOOLLLLLLLLLLLLLLLL
       */}
      <Container header="Example header" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
