import SquareBTN from "../SquareBTN/SquareBTN";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import Link from "next/link";

export default function Contact() {
  return (
    <section id='contact' className='py-8 lg:py-16'>
      <div className='bg-opacity-0 rounded-xl bg-slate-600/20 ring-1 ring-blue-400/20 p-5 md:p-10'>
        <h4 className='mb-0 text-3xl font-bold lg:5xl text-center'>
          Contact Me
        </h4>
        <p className='text-center mb-5'>Using Your Suitable Way</p>
        <div className='max-w-lg mx-auto flex flex-wrap justify-between'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/showrove.roy.3/'>
            <SquareBTN>
              <GrFacebook />
            </SquareBTN>
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/showrove/'>
            <SquareBTN>
              <BsLinkedin />
            </SquareBTN>
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:showrove200@gmail.com'>
            <SquareBTN>
              <BsFillEnvelopeFill />
            </SquareBTN>
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://wa.me/+8801725377836'>
            <SquareBTN>
              <BsWhatsapp />
            </SquareBTN>
          </Link>

          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.upwork.com/freelancers/~0109983cbb7f7e8d98'>
            <SquareBTN>
              <SiUpwork />
            </SquareBTN>
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.upwork.com/freelancers/~0109983cbb7f7e8d98'>
            <SquareBTN>
              <TbBrandFiverr />
            </SquareBTN>
          </Link>
        </div>
        <p className='text-center mt-20'>
          © 2023. All rights reserved by <strong>Showrove Roy</strong>
        </p>
      </div>
    </section>
  );
}
