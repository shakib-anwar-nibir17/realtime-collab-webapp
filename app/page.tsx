"use client";
import HomeBar from "@/components/home/HomeBar";
import HomeHero from "@/components/home/HomeHero";

const Home = () => {
  console.log("Home page");
  return (
    <div>
      <HomeBar />
      <HomeHero />
    </div>
  );
};

export default Home;
