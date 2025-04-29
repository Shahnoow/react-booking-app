import Featured from "../../components/featured/Featured.jsx";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";
import Header from "../../components/header/Header.jsx";
import Nabar from "../../components/nabar/Nabar.jsx";
import PropertyList from "../../components/propertyList/PropertyList.jsx";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nabar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
