import Header from "../components/header";
import Hero from "../components/hero";
import WhyChooseUs from "../components/whyChooseUs";
import ScrollToTop from "../components/ui/scrollToTop";
import AboutUS from "../components/aboutUs";
import Catering from "../components/catering";
import Offers from "../components/offers";
import Gallery from "../components/gallery";
import CommentsCarousel from "../components/comments";
import Contactus from "../components/contactus";
import RestaurantFooter from "../components/footer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />

      <main>
        <ScrollToTop />
        <Hero />
        <WhyChooseUs />
        <AboutUS />
        <Gallery />
        <Catering />
        <Offers />
        <CommentsCarousel />
        <Contactus />
        <RestaurantFooter />
      </main>
    </div>
  );
}
