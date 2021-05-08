import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import Head from 'next/head';

const resume = () => {
  return (
    <motion.div
      className='px-8 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Developer | Resume </title>
      </Head>
      {/* Experience */}
      <div className='grid gap-8 mb-3 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold font-roboto'>Education</h5>
          <div>
            <h5 className='mt-3 text-xl font-bold font-roboto'>Self-taught</h5>
            <p className='font-regular'>Junior Javascript developer</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold font-roboto'>Experince</h5>
          <div>
            <h5 className='mt-3 text-xl font-bold font-roboto'>One year</h5>
            <p className='font-regular'>Currently employed at art studio Beflex</p>
          </div>
        </motion.div>
      </div>

      {/* Languages & Tools */}
      <div className='grid gap-8 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold tracking-wider grad-h1 font-kaushan'>
            Languages & Frameworks
          </h5>
          <div className='my-2'>
            {languages.map((language) => (
              <Bar key={language.name} data={language} />
            ))}
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold tracking-wider grad-h1 font-kaushan'>
            Tools & Softwares
          </h5>
          <div className='my-2'>
            {tools.map((tool) => (
              <Bar key={tool.name} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
