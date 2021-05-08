import Head from 'next/head';
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const Index = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      className='flex flex-col flex-grow px-8 pt-1'
      exit='exit'
    >
      <Head>
        <title>Portfolio App</title>
      </Head>

      <h1 className='my-3 font-medium'>
        Hi visitor. My name is Giga and I'm a self-taught Javascript developer. As
        much as I recently discovered my interests in the field, I've only got 1 year
        of experience. Here comes a random bundle of nonesense instead of a simple
        lorem ipsum text, cause lorems are monotonious ugly eye-pickers.
      </h1>

      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginRight: '-2rem', marginLeft: '-2rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I offer</h6>
        <motion.div
          className='grid gap-6 lg:grid-cols-2'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className='flex items-center justify-start px-4 py-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
