import Image from "next/image";
import MainBTN from "../MainBTN/MainBTN";
import Link from "next/link";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className='lg:h-screen lg:py-0 py-8 flex md:flex-row flex-col md:justify-between items-center '>
      <div className='md:w-2/3 w-full mt-5 mb-10 md:text-left text-center'>
        <div className='titleN text-4xl sm:text-5xl md:text-6xl'>
          <span>I</span>
          <span>{"'"}</span>
          <span>M</span>
        </div>
        <div className='titleN text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>w</span>
          <span>r</span>
          <span>o</span>
          <span>v</span>
          <span>e</span>
          <span className='px-2 lg:px-3'></span>
          <span>r</span>
          <span>o</span>
          <span>y</span>
        </div>

        <h3 className='text-xl sm:text-2xl  font-semibold tracking-wide lg:tracking-widest	mb-10'>
          Your Web App Developer
        </h3>

        <div className='flex gap-2 md:justify-start justify-center'>
          <MainBTN>
            <span className='pr-1 wave'>👋</span>
            {"Let's Talk"}
          </MainBTN>
          <MainBTN>My Resume</MainBTN>
        </div>
      </div>
      <div className='md:w-1/3 w-full'>
        <Image
          className='rounded-xl mx-auto'
          src={"/profile2.jpg"}
          alt='Picture of the author'
          width={500}
          height={500}
        />
        <div className='flex gap-3 justify-evenly mt-3'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/showrove.roy.3/'>
            <GrFacebook className='text-2xl hover:text-emerald-500 hover:scale-125 duration-200' />
          </Link>

          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://wa.me/+8801725377836'>
            <BsWhatsapp className='text-2xl hover:text-emerald-500 hover:scale-125 duration-200' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/showrove-roy'>
            <BsGithub className='text-2xl hover:text-emerald-500 hover:scale-125 duration-200' />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/showrove/'>
            <BsLinkedin className='text-2xl hover:text-emerald-500 hover:scale-125 duration-200' />
          </Link>
        </div>
      </div>
    </section>
  );
}
