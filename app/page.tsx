import ActivityFeed from "./components/Activity";
import CTA from "./components/CTA";
import Empower from "./components/Empower";
import FAQ from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Opportunities from "./components/Opportunities";
import Potential from "./components/Potential";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonial";
import Ticker from "./components/Ticker";

const Home = () => {
  return (
    <main className="px-32 bg-slate-950 lg:px-8 lg:py-12 lg:w-full">
      <MobileNav />
      <section className="space-y-48">
        <Nav />
        <Hero />
        <Ticker />
        <Features />
        <Stats />
        <Potential />
        <Opportunities />
        <Empower />
        <ActivityFeed />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </section>
    </main>
  )
}

export default Home;