import SquareBTN from "../SquareBTN/SquareBTN";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export default function Contact() {
  return (
    <section id='contact' className='py-8 lg:py-16'>
      <div className='bg-opacity-0 rounded-xl bg-slate-600/20 ring-1 ring-blue-400/20 p-5 md:p-10'>
        <h4 className='mb-0 text-3xl font-bold lg:5xl text-center'>
          Contact Me
        </h4>
        <p className='text-center mb-5'>Using Your Suitable Way</p>
        <div className='max-w-lg mx-auto flex flex-wrap justify-between'>
          <SquareBTN>
            <GrFacebook />
          </SquareBTN>
          <SquareBTN>
            <BsLinkedin />
          </SquareBTN>
          <SquareBTN>
            <BsFillEnvelopeFill />
          </SquareBTN>
          <SquareBTN>
            <BsWhatsapp />
          </SquareBTN>
          <SquareBTN>
            <SiUpwork />
          </SquareBTN>
          <SquareBTN>
            <TbBrandFiverr />
          </SquareBTN>
        </div>
      </div>
    </section>
  );
}
