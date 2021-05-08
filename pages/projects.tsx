import { works as worksData } from '../data';
import WorkCard from '../components/WorkCard';
import ProjectsNavbar from '../components/ProjectNavbar';
import { useState } from 'react';
import { Category } from '../types';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const projects = () => {
  const [works, setWorks] = useState(worksData);
  const [active, setActive] = useState('all');

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilter = (category: Category | 'all') => {
    if (category === 'all') {
      setWorks(worksData);
      setActive(category);
      return;
    }

    const newArray = worksData.filter((work) => work.category.includes(category));
    setWorks(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className='px-3'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Developer | Projects </title>
      </Head>
      <div
        className='px-4 py-2 overflow-y-scroll custom-scroll'
        style={{ height: '65vh' }}
      >
        <ProjectsNavbar handleFilter={handleFilter} active={active} />

        <motion.div
          className='relative grid grid-cols-12 gap-4 my-3'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {works.map((work) => (
            <motion.div
              key={work.name}
              className='col-span-12 sm:col-span-6 lg:col-span-4'
              variants={fadeInUp}
            >
              <WorkCard
                work={work}
                key={work.name}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default projects;
