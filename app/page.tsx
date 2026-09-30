import Hero from "@/components/home/Hero";
import FinalCTA from "@/components/home/FinalCTA";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Stats from "@/components/home/Stats";
import TrainerIntro from "@/components/home/TrainerIntro";

export default function Home() {
  return (
  <main>
  <Hero />
  <TrainerIntro />
  <Stats />
  <FeaturedCourses />
  <WhyChooseUs />
  <Testimonials />
  <FAQ />
  <FinalCTA />
</main>
  );
}