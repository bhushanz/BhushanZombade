import { motion } from "framer-motion";
import pro1 from '/ProjectsImg/WildAngleSafari.png'
import pro2 from '/ProjectsImg/ObeysPic.png'
import pro3 from '/ProjectsImg/Exoape.png'
import pro4 from '/ProjectsImg/Mercelys.png'

const projects = [
  {
    name: "Wild Life Safari Webpage",
    image: pro1,
    link: "https://wild-angle-safari.vercel.app/",
    tech: ["React", "GSAP", "Tailwind"],
  },
  {
    name: "ObeyAgency website clone  ",
    image: pro2,
    link: "https://bhushanz.github.io/ObeyAgency/",
    tech: ["javascript", "Framer Motion", "Tailwind"],
  },
  {
    name: "Exoape awwwards Website clone",
    image: pro3,
    link: "digital-experince.vercel.app",
    tech: ["React", "Gsap", "Tailwind"],
  },
    {
    name: "Mercelays Iceream Reimagine website",
    image: pro4,
    link: "bhushanz.github.io/mercelysIceCream/ ",
    tech: ["React", "gsap", "Tailwind"],
  },
];

const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2  gap-x-0 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: i * 0.2 }}
          className="relative md:w-[95%] w-full rounded-2xl overflow-hidden m-auto"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt="Project Screenshot"
              className="w-full h-full object-cover"
            />
          </a>

          {/* Hover Info (for md and above) */}
          <div className="hidden uppercase px-5 p-3 absolute z-4 w-full h-24 bottom-0 md:flex gap-3 bg-black backdrop-blur-md">
            <div className="h-full w-2 bg-yellow-200"></div>
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-100 font-semibold md:text-md">
                <span>Project name</span>: {project.name}
              </h1>
              <h1 className="text-white navbar font-medium md:text-md">
                Tech Used :{" "}
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="border border-gray-600 navbar text-xs rounded-2xl inline-block p-1 px-3 m-1"
                  >
                    {t}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="px-2 py-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-zinc-900 font-semibold md:text-xl text-md">
                <span className="capitalize text-md">Project name</span>:{" "}
                {project.name}
              </h1>
              <h1 className="text-zinc-900 font-medium md:text-xl flex gap-1 flex-wrap">
                Tech Used :
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs rounded-full border-gray-400 border inline-block p-1 px-3"
                  >
                    {t}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
