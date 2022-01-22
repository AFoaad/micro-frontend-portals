import React from "react";
import ReactDOM from "react-dom";
import Header from 'home/Header';
import Footer from 'home/Footer';
import Footer from 'home/HomeContent';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <HomeContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
