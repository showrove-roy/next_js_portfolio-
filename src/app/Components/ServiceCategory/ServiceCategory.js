import Image from "next/image";

export default function ServiceCategory() {
  return (
    <section className='py-10'>
      <div className='grid-cols-2 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl lg:grid backdrop-blur-sm'>
        <div className='grid items-center grid-cols-2 gap-6 font-medium text-center text-white services lg:m-6'>
          <div className='px-5 py-8 bg-slate-600/30 ring-1 ring-blue-400/30 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-white'>
            <div className='pb-3 flex justify-center'>
              <Image src='/web.webp' width={90} height={90} />
            </div>
            <h4 className='text-sm font-bold'>Web App</h4>
          </div>
          <div className='px-5 py-8 bg-slate-600/30 ring-1 ring-blue-400/30 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-white'>
            <div className='pb-3 flex justify-center'>
              <Image src='/ecommerce.webp' width={80} height={80} />
            </div>
            <h4 className='text-sm font-bold'>Headless CMS</h4>
          </div>
          <div className='px-5 py-8 bg-slate-600/30 ring-1 ring-blue-400/30 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-white'>
            <div className='pb-3 flex justify-center'>
              <Image src='/custom.webp' width={60} height={60} />
            </div>
            <h4 className='text-sm font-bold'>eCommerce</h4>
          </div>
          <div className='px-5 py-8 bg-slate-600/30 ring-1 ring-blue-400/30 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-white'>
            <div className='pb-3 flex justify-center'>
              <Image src='/uiux.webp' width={45} height={45} />
            </div>
            <h4 className='text-sm font-bold'>Prototyping</h4>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center p-5 pb-8 space-y-6 text-center md:items-start lg:text-left'>
          <h3 className='text-3xl font-bold text-white lg:text-4xl title'>
            Let{"'"}s develop a meaningful{" "}
            <span className='mt-0 text-transparent md:mt-5 bg-clip-text bg-gradient-to-r from-red-600 to-purple-500'>
              web application
            </span>
          </h3>
          <p className='text-white/70'>
            Whether you need a corporate website with an integrated booking
            system, a simple landing page to collect leads, or even a complete
            restaurant management system, I can pull it off for you. Starting
            from subtle <strong>wow</strong> animations to complex development,
            me and my team have what it takes to help you stand out from the
            crowd.
            <span className='block font-bold'>
              Seriously, what are you waiting for?
            </span>
          </p>
          <div className='mx-auto lg:mx-0'>
            <button className='cursor-pointer relative inline-flex items-center justify-center overflow-hidden  font-medium  rounded-lg group px-6 py-3 hover:text-white bg-slate-300 text-black'>
              <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-600 rounded-full group-hover:w-56 group-hover:h-56'></span>
              <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
              <span className='relative'>Let{"'"}s Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
