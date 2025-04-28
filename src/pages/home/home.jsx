import Featured from "../../components/featured/Featured.jsx";
import Header from "../../components/header/Header.jsx";
import Nabar from "../../components/nabar/Nabar.jsx";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nabar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
