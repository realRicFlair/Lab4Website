'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";
import ArrowButton from './ArrowButton';

interface Project {
  id: number;
  title: string;
  description: string;
  img?: string;
  url: string; // New URL field
}

const projects: Project[] = [
  { id: 1, title: 'My favourite game this year!', description: 'Its space marine 2! Its sick. I love 40k', img: "/SM2.jpg", url: "https://www.focus-entmt.com/en/games/warhammer-40000-space-marine-2" },
  { id: 2, title: 'Photography', description: 'Random pic of a mountain I took on my phone', img: "/CoolMountain.jpg", url: "https://en.wikipedia.org/wiki/Mount_Baker" },
  { id: 3, title: 'What Im Hyped for', description: 'Dune Prophecy Series', img: "/duneprophecy.jpg", url: "https://www.youtube.com/watch?v=CzVHWNosS2o&ab_channel=Max" },
  { id: 4, title: 'Random Video', description: 'yeah idk what this is', url: "https://www.youtube.com/watch?v=UXA-Af-JeCE&ab_channel=xkcd%27sWhatIf%3F" },
];

const ProjectsSnippet = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Cool links you can click!</h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map(project => (
          <Link key={project.id} href={project.url}>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              {project.img && (
                <Image
                  src={project.img}
                  alt={project.description}
                  width={800}
                  height={800}
                  className="rounded-3xl"
                />
              )}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSnippet;
