import Brand from "@/components/brand";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Hobbies from "@/components/hobbies";
import Nav from "@/components/nav";
import Status from "@/components/status";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Status />
        <Hobbies />
        <Works />
        <Brand />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
