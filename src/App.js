import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import News from "./components/News/News";
import Stories from "./components/Stories/Stories";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <News />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
