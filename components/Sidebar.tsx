import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image
        src='/me.jpg'
        alt='Yep, that is me'
        className='rounded-full'
        height={128}
        width={128}
        objectFit='cover'
        objectPosition='top center'
        loading='lazy' // eager preloads it (lazy is default)
        quality={100} // default is 75
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider grad-h1 font-kaushan'>
        Giga Kvachakhia
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        Web Developer
      </p>

      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
        aria-label='download'
        // href='/assets/MyResume.pdf'
        // download='MyResume.pdf'
      >
        <GiTie className='w-6 h-6' /> Download Resume
      </a>

      {/* social icon */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a
          target='_blank'
          href='https://www.facebook.com/gigakvachaxia'
          aria-label='facebook'
        >
          <AiFillFacebook className='w-8 h-8' />
        </a>
        <a target='_blank' href='https://github.com/Mipo8159' aria-label='github'>
          <AiFillGithub className='w-8 h-8' />
        </a>
        <a
          target='_blank'
          href='https://www.instagram.com/giga__k/'
          aria-label='instagram'
        >
          <AiFillInstagram className='w-8 h-8' />
        </a>
      </div>

      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-dark-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Tbilisi, Georgia</span>
        </div>

        <p className='my-2'>stalkerglac@gmail.com</p>
        <p className='my-2'>
          <a href='tel:579203373' className='hover:text-red-400'>
            579203373{' '}
          </a>
          /{' '}
          <a href='tel:577925965' className='hover:text-red-400'>
            577925965
          </a>
        </p>
      </div>
      {/* email button */}
      <button
        className='w-9/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={() => window.open('mailto:stalkerglac@gmail.com')}
      >
        Email me
      </button>
      <button
        className='w-9/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
        onClick={changeTheme}
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
