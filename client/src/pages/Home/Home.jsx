import Hero from "../../components/home/Hero";
import PortalCards from "../../components/home/PortalCards";
import TrustBar from "../../components/home/Trustbar";
import Navbar from "../../components/layout/Navbar";
import "./Home.css";



const Home = () => {
  return (
    <main className="home-page">
      <div className="background-overlay"></div>

      <div className="home-content">
        <Navbar/>
        <Hero/>

        <PortalCards/>
        
        <TrustBar/>

        <p className="copyright-text">
          © 2026 <span>CampusConnect AI</span>. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Home;