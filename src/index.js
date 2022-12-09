import React from 'react';
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => (
  <div>
    <Modal />
  </div>
);

render(<App />, document.getElementById("root"));