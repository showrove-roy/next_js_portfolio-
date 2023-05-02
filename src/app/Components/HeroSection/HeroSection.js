import Image from "next/image";
import MainBTN from "../MainBTN/MainBTN";

export default function HeroSection() {
  return (
    <section className='maxW'>
      <div className='h-screen flex justify-between items-center'>
        <div className='w-2/3'>
          <div className='titleN'>
            <span>I</span>
            <span>`</span>
            <span>M</span>
          </div>
          <div className='titleN'>
            <span>S</span>
            <span>h</span>
            <span>o</span>
            <span>w</span>
            <span>r</span>
            <span>o</span>
            <span>v</span>
            <span>e</span>
            <span className='px-3'></span>
            <span>r</span>
            <span>o</span>
            <span>y</span>
          </div>

          <h3 className="text-3xl font-semibold tracking-wide	mb-5">Your  Web  App  Developer</h3>

          <MainBTN>My Resume</MainBTN>
        </div>
        <div className='w-1/3'>
          <Image
          className="rounded-xl"
            src={"/profile2.jpg"}
            alt='Picture of the author'
            width={300}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
