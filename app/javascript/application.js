// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from "./Components/Greetings";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return
  <Router>
    <Routes>
      <Route path="/" element={<Greetings />}/>
    </Routes>
  </Router>
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);