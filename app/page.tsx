"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
};

export default Home;
