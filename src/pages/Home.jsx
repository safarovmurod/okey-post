import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";
import Banner from "../components/Home/Banner";
import Calculator from "../components/Home/Calculator";
import Delivery from "../components/Home/Delivery";
import Steps from "../components/Home/Steps";
import { bannerList } from "../data/api";
import Clients from "../components/Home/Clients";
import Reviews from "../components/Home/Reviews";
import About from "../components/Home/About";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Banner data={bannerList[0]} />
      <Calculator />
      <Delivery />
      <Steps />
      <Banner data={bannerList[1]} />
      <Clients />
      <Reviews />
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}
