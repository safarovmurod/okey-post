import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Shops from "../components/Sales/Shops";
import SocialBanner from "../components/SocialBanner";
import Footer from "../components/Footer";
import { pageBannerList } from "../data/api";

export default function Sales() {
  return (
    <>
      <Header />
      <PageBanner data={pageBannerList[1]} />
      <Shops />
      <SocialBanner />
      <Footer />
    </>
  );
}