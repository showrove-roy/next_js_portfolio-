import Image from "next/image";

export default function Service() {
  return (
    <section id="service" className='grid gap-8 py-8 mx-1 quality lg:grid-cols-3 grid-cols-0'>
      <div className='flex flex-col items-center justify-center py-8 space-y-1 backdrop-blur-sm rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20'>
        <Image
          src='/creative-websitedesign.svg'
          width={130}
          height={130}
          className='py-5'
        />
        <h3 className='text-xl font-bold text-white lg:text-2xl'>
          Design-First
        </h3>
        <p class='px-2 text-sm text-center text-white/70'>
          I take a design-first approach in web app development. It shouldn{"'"}
          t only be about excellent performance, designs should matter too.
        </p>
      </div>
      <div className='flex flex-col items-center justify-center py-8 space-y-1 backdrop-blur-sm rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20'>
        <Image
          src='/prowebsite.svg'
          width={130}
          height={130}
          className='py-5'
        />
        <h3 className='text-xl font-bold text-white lg:text-2xl'>
          Business-minded
        </h3>
        <p class='px-2 text-sm text-center text-white/70'>
          Business-savvy developers are hard to find nowadays. How can I deliver
          great outcomes if I don{"'"}t understand your KPIs and why you require
          a certain functionality in your web app?
        </p>
      </div>
      <div className='flex flex-col items-center justify-center py-8 space-y-1 backdrop-blur-sm rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20'>
        <Image
          src='/relable-fast-website.svg'
          width={130}
          height={130}
          className='py-5'
        />
        <h3 className='text-xl font-bold text-white lg:text-2xl'>
          Idea into Reality
        </h3>
        <p class='px-2 text-sm text-center text-white/70'>
          Whether you have a concrete business plan, proof of concept or you
          {"'"}re just starting out. I can help you with wireframing, developing
          MVPs, or a complete web solution.
        </p>
      </div>
    </section>
  );
}
