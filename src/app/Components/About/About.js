import Image from "next/image";

export default function About() {
  return (
    <section id='about' className='py-8'>
      <div className='bg-opacity-0 rounded-2xl bg-slate-600/20 ring-1 ring-blue-400/20'>
        <div className='items-center py-6 md:flex '>
          <div className='flex-1 mx-5 font-sans text-white lg:mb-0 aboutText'>
            <h4 className='my-5 text-3xl font-bold lg:5xl'>About Me</h4>
            <p className='font-light leading-relaxed tracking-wide opacity-75 '>
              This is Showrove Roy, a skilled MERN stack web developer. With his
              in-depth knowledge of the Web Platform & SaaS products, Showrove
              is committed to building high-quality digital products that drive
              results for his clients. ✌
              <br />
              <br />
              As a MERN stack web developer, I specialize in building dynamic,
              modern web applications using <strong>MongoDB</strong>,{" "}
              <strong>Express</strong>, <strong>React</strong>,
              <strong>Next Js</strong> and ,<strong>Node.js</strong>. With a
              strong foundation in <strong>JavaScript</strong>, I am skilled at
              developing both the front-end and back-end of web applications,
              making me a valuable asset in the development process from start
              to finish. My experience with the MERN stack allows me to create
              fast, responsive, and scalable applications that deliver a
              seamless user experience.
              <br />
              <br />
              In my spare time, I love to explore new technology and stay up to
              date on the latest industry trends. I also have a passion for
              traveling and experiencing different cultures. I am always looking
              for new challenges and opportunities to grow as a developer.
            </p>
          </div>
          <div className=''>
            <Image
              src='/raqib-webappdeveloper.webp'
              width={380}
              height={425}
              alt='A man typing laptop'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
