import Link from "next/link";
import MainBTN from "./Components/MainBTN/MainBTN";

export default function NotFound() {
  return (
    <>
      <section className='maxW h-screen flex flex-col justify-center items-center'>
        <h1 className='md:text-4xl text-xl text-white mb-5'>
          404 | Page Not Found
        </h1>
        <Link href='/'>
          <MainBTN>Home</MainBTN>
        </Link>
      </section>
    </>
  );
}
