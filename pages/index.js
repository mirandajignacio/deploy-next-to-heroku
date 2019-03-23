import Link from "next/link";

export default function Index() {
  return (
    <div>
      <h1>Hello Next.js 👋 Deployate la recalcada build de tu madre</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
