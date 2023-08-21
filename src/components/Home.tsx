import Category from "./pages/home/Category";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Slideshow from "./pages/home/Slideshow";
import DermalogicalBanner from "./pages/home/DermalogicalBanner";
import Newproducts from "./pages/home/Newproducts";

function Home() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Category />
      <DermalogicalBanner />
      <Newproducts />
      <Footer />
    </>
  );
}

export default Home;
