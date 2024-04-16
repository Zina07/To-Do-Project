import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      DashboardPage
      <div>
        {" "}
        <Link href="/">Home</Link>
      </div>
      <div>
        {" "}
        <Link href="/login">login</Link>
      </div>
      <div>
        {" "}
        <Link href="./components/Footer">footer</Link>
      </div>
      <div>
        {" "}
        <Link href="./components/Header">header</Link>
      </div>
    </div>
  );
}
