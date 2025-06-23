import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Kehidupan yang kreatif"
        text=" Semua Produk RAOUF dibuat dengan ukuran standar sehingga Anda dapat dengan bebas memadupadankannya."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Hunian Nyaman dan Elegan"
        text=" Semua Produk RAOUF dibuat dengan ukuran standar sehingga Anda dapat dengan bebas memadupadankannya."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
