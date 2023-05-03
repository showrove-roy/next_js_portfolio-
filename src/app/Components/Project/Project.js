import Link from "next/link";
import ProjectCard from "./ProjectCard";
import MainBTN from "../MainBTN/MainBTN";

export default function Project() {
  const projects = [
    {
      projectName: "Atach (Finance app theme)",
      imageURL: "/projects/project1.png",
      liveLink: "https://atach.netlify.app/",
      codeLink: "https://github.com/showrove-roy/AtachThemeDesign",
    },
    {
      projectName: "E-commerce Dashboard",
      imageURL: "/projects/project2.png",
      liveLink: "https://troubleashoot-admin.netlify.app/",
      codeLink: "https://github.com/showrove-roy/RoyalX_DashBoard",
    },
    {
      projectName: "Wild Camera Zone",
      imageURL: "/projects/project3.png",
      liveLink: "https://a-12-wild-camera-zone.web.app/",
      codeLink: "https://github.com/showrove-roy/Wild-Camera-Zone",
    },
    {
      projectName: "Take Tours Travel",
      imageURL: "/projects/project4.png",
      liveLink: "https://take-tour-traver.web.app/",
      codeLink: "https://github.com/showrove-roy/Take-Tours-Travel",
    },
  ];

  return (
    <section id="portfolio" className='py-8 lg:py-16'>
      <div className='flex flex-col justify-center text-center proTitle'>
        <h1 className='py-2 text-4xl font-bold text-purple-500 md:text-5xl'>
          Projects I’ve done
        </h1>
        <p className='py-4 text-white opacity-75'>
          I build Web Applications that bring positive results to businesses.
          Check out a few of my projects.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-2'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Link href='https://github.com/showrove-roy?tab=repositories' target="_blank">
        <MainBTN>View All</MainBTN>
        </Link>
      </div>
    </section>
  );
}
