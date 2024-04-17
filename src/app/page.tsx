import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Todo />
      </main>

      <Footer />
    </>
  );
}
