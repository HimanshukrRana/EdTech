import AboutUs from "../src/components/frontPage/AboutUs";

import Parallax from "../src/components/frontPage/Parallax";

import Layout from "../src/components/layout/Layout";
import Coursescard from "../src/components/frontPage/Coursescard";
import Hero from "../src/components/frontPage/Hero";
import WhyUs from "../src/components/frontPage/WhyUs";
import Reviews from "../src/components/frontPage/Reviews";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <WhyUs />

      <Parallax />

      <Coursescard />

      <Reviews />

      <AboutUs />
    </Layout>
  );
}

