import Image from "next/image";
import MainBTN from "../MainBTN/MainBTN";

export default function HeroSection() {
  return (
    <section className='maxW'>
      <div className='h-screen flex md:flex-row flex-col md:justify-between items-center '>
        <div className='md:w-2/3 w-full my-10 md:text-left text-center'>
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

          <h3 className='text-xl sm:text-2xl  font-semibold tracking-wide lg:tracking-widest	mb-5'>
            Your  Web App Developer
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
            className='rounded-xl mx-auto w-80'
            src={"/profile2.jpg"}
            alt='Picture of the author'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
