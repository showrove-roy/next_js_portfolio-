import Link from "next/link";

export default function NavBar() {
  return (
    <header className='bg-[#121212] sticky top-0 p-5 text-white'>
     <nav className="maxW">
     <Link className='m-2' href='/'>
        Home
      </Link>
      <Link className='m-2' href='#about'>
        About
      </Link>
      <Link className='m-2' href='#contact'>
        Contact
      </Link>
      <Link className='m-2' href='#footer'>
        Footer
      </Link>
     </nav>
    </header>
  );
}
