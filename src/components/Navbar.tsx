import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-white shadow flex justify-between">
      <h1 className="font-bold text-xl">AI Resume Builder</h1>
      <Link href="/resume" className="text-blue-600">
        Build Resume
      </Link>
    </nav>
  );
}
