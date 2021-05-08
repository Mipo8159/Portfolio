import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Work } from '../types';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';

const WorkCard: React.FC<{
  work: Work;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  work: { name, key, deployUrl, description, githubUrl, image, id },
  setShowDetail,
  showDetail,
}) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        className='rounded-lg cursor-pointer'
        onClick={() => setShowDetail(id)}
        width={300}
        height={150}
        layout='responsive'
      />
      <p className='my-2 text-center'>{name}</p>

      {showDetail === id && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.div variants={fadeInUp}>
              <Image
                src={image}
                alt={name}
                width={300}
                height={150}
                layout='responsive'
                className='rounded-lg'
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex justify-center my-4 space-x-3'
            >
              <a
                href={githubUrl}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployUrl}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <motion.h2
              variants={fadeInUp}
              className='mb-3 text-xl font-medium md:text-2xl'
            >
              {name}
            </motion.h2>

            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'
            >
              {key.map((k) => (
                <span
                  key={k}
                  className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm'
                >
                  {k}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
