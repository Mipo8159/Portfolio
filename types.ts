import { IconType } from 'react-icons/lib';

export interface Service {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Work {
  id: number;
  name: string;
  description: string;
  image: string;
  deployUrl: string;
  githubUrl: string;
  category: Category[];
  key: string[];
}

export type Category = 'react' | 'node' | 'express' | 'django' | 'mongo';
