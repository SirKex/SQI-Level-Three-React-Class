import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TextComponents from "./Components/TextComponents";
import ImageComponents from "./Components/ImageComponents";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="text-primary fs-1">Hello React</div>
      <div className="row w-100 container-fluid mx-auto">
        <div className="col-11 col-md-6 col-lg-6">
          <TextComponents />
        </div>
        <div className="col-11 col-md-6 col-lg-6">
          <ImageComponents />
        </div>
      </div>
    </div>
  )
};

export default App;
