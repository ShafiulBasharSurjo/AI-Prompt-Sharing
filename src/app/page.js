import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/Whyus";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <WhyChooseUs />
    </div>
  );
}
