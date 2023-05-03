import Link from "next/link";
import MainBTN from "../MainBTN/MainBTN";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { projectName, imageURL, liveLink, codeLink } = project;
  return (
    <div className='m-4 rounded-lg shadow bg-opacity-60 bg-clip-padding hover:ring-1 hover:ring-blue-400 bg-slate-600/20 ring-1 ring-blue-400/20'>
      <div className='p-2'>
        <Image
          src={imageURL}
          width={600}
          height={300}
          alt={projectName}
          className='w-auto h-auto mx-auto'
        />
        <div className='flex items-center justify-between px-2 py-3'>
          <p className='text-xs sm:text-sm sm:font-semibold font-medium text-left text-white'>
            {projectName}
          </p>
          <div className='flex gap-2'>
            <Link target='_blank' href={codeLink}>
              <MainBTN>Code</MainBTN>
            </Link>
            <Link target='_blank' href={liveLink}>
              <MainBTN>Live</MainBTN>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
