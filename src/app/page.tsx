import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col content-center justify-center h-screen text-center">
        <h1 className="text-center text-3xl font-extrabold">HOME</h1>
        <Link href="/signin">
          <button className=" bg-black text-white px-12 py-4 rounded-lg mt-10 text-xl">
            Go To Sign in Page
          </button>
        </Link>
      </div>
    </>
  );
}
