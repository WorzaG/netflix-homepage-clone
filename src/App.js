import { useEffect, useState } from "react";
import "./App.css";
import movies from "./api/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Components
import Header from "./components/Header";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

function App() {
  const [data, setdata] = useState([]);
  const fetchdata = () => {
    setdata(movies);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content">
        <Categories data={data} setdata={setdata} name="Popular on Netflix" />
        <Categories data={data} setdata={setdata} name="Drama series" />
      </div>
    </div>
  );
}

export default App;
