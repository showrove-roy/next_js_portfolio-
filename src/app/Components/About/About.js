import Image from "next/image";

export default function About() {
  return (
    <section id='about' className='py-8'>
      <div className='bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20'>
        <div className='items-center py-6 md:flex '>
          <div className='flex-1 mx-5 font-sans text-white lg:mb-0 aboutText'>
            <h4 className='my-5 text-3xl font-bold lg:5xl'>About Me</h4>
            <p className='font-light leading-relaxed tracking-wide opacity-75 '>
              This is Raqib Nur, a Web Application Developer residing in Dhaka,
              Bangladesh. Even if it sounds humorous, I went to Madrasa and
              returned as a programmer! ✌<br />
              <br />I consider myself to be completely blessed as I get to
              inspect and build websites for a living. Of my intense interest in
              the Web Platform &amp; SaaS products, I plan to build
              results-driven digital products for my clients while becoming part
              of meaningful businesses along the way.
              <br />
              <br />I{"'"}ve built numerous websites and worked closely with the
              founders of the companies. Besides, I{"'"}ve also committed my
              time to 3 companies part-time to help them hire and manage their
              own technical team, and I am here today to become a part of your
              journey.
              <br />
              <br />
              Recently, I{"'"}ve co-founded an eCommerce Development Company:
              The Run Digital, where we help entrepreneurs fix their web goals
              and help them achieve them with our web-based solutions. We are,
              after all, KP-Idriven.
            </p>
          </div>
          <div className=''>
            <Image src='/raqib-webappdeveloper.webp' width={380} height={425} />
          </div>
        </div>
      </div>
    </section>
  );
}
