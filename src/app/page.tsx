import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Todo from "@/components/Todo";
import Item from "@/components/Item";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Photos from "@/components/Photos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Todo />
        <Team />
        <Clients />
        <Photos />
      </main>

      <Footer />
    </>
  );
}
