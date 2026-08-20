import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Steps from "../components/HowToBuy/Steps";
import SocialBanner from "../components/SocialBanner";
import Footer from "../components/Footer";
import { pageBannerList } from "../data/api";

export default function HowToBuy() {
  return (
    <>
      <Header />
      <PageBanner data={pageBannerList[0]} />
      <Steps />
      <SocialBanner />
      <Footer />
    </>
  );
}