import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { Work, Service, Skill } from './types';
import { BsCircleFill } from 'react-icons/bs';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about: 'handle database, server, api using <b>Express</b>',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
];

export const languages: Skill[] = [
  {
    name: 'Javascript',
    level: '75%',
    Icon: BsCircleFill,
  },
  {
    name: 'ReactJS',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'NextJS',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'NodeJS',
    level: '75%',
    Icon: BsCircleFill,
  },
  {
    name: 'Typescript',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tailwind',
    level: '80%',
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  {
    name: 'VScode',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'AdobeXD',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'Figma',
    level: '75%',
    Icon: BsCircleFill,
  },
  {
    name: 'Illustrator',
    level: '70%',
    Icon: BsCircleFill,
  },
];

export const works: Work[] = [
  {
    id: 1,
    name: 'COVID Tracker',
    description:
      'This app shows a statistical view about corona virus over the world',
    image: '/images/covid.jpg',
    deployUrl: 'https://covid-19-tracker-by-sumit.web.app/',
    githubUrl: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['react'],
    key: ['React', 'Chart.js', 'Material UI'],
  },
  {
    id: 2,
    name: 'Algorithm Visualizer',
    image: '/images/algoVisual.png',
    deployUrl: 'https://visual-algorithm.web.app/',
    githubUrl: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['react'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    key: ['React', 'firebase', 'Framer Motion'],
  },

  {
    id: 3,
    name: 'Dev Talks',
    image: '/images/dev.jpg',
    deployUrl: 'https://dev-talks.herokuapp.com/',
    githubUrl: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['node', 'mongo', 'react'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key: ['React', 'Redux', 'Node', 'Express', 'Mongo', 'REST API', 'Bootstrap'],
  },

  {
    id: 4,
    name: 'Realtime Chat App',
    image: '/images/chatapp.jpg',
    deployUrl: 'https://sumit-chat.netlify.app/',
    githubUrl: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['node', 'react'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    key: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    id: 5,
    name: 'Tweeter Clone',
    image: '/images/tweetme.jpg',
    deployUrl: 'http://sumaxtweetme.pythonanywhere.com/',
    githubUrl: 'https://github.com/Dey-Sumit/tweetme',
    category: ['django', 'react'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    key: ['React', 'Django', 'Django REST API'],
  },

  {
    id: 6,
    name: 'Color Classification using tf.js',
    image: '/images/color.jpg',
    deployUrl: '!#',
    githubUrl: 'https://github.com/Dey-Sumit/color-classification',
    category: ['express'],
    description:
      'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    key: ['Express', 'TensorFlow.js', 'Vanilla js'],
  },
  {
    id: 7,
    name: 'YouTube using YouTube ',
    image: '/images/youtubeClone.png',
    deployUrl: 'https://not-utube.web.app/',
    githubUrl: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['express'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key: ['React', 'Redux', 'Firebase Auth', 'YouTube API', 'Sass', 'Bootstrap'],
  },
  {
    id: 8,
    name: 'Football App',
    image: '/images/football.png',
    deployUrl: 'https://o-my-goal.web.app/',
    githubUrl: 'https://github.com/Dey-Sumit/football-app',
    category: ['react'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
];
