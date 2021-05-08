import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: React.FC<{
	activeItem: string;
	setActiveItem: (name: string) => void;
	name: string;
	route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
	return (
		activeItem !== name && (
			<Link href={route}>
				<a onClick={() => setActiveItem(name)}>{name}</a>
			</Link>
		)
	);
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');
	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/projects') setActiveItem('Projects');
		if (pathname === '/resume') setActiveItem('Resume');
	}, []);

	return (
		<div className='flex justify-between px-8 py-3 my-3'>
			<span className='text-xl font-semibold text-red-400 uppercase border-b-2 border-red-400 font-roboto md:2xl'>
				{activeItem}
			</span>
			<div className='flex space-x-6 font-semibold text-red-400 uppercase font-roboto font-lg'>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='About'
					route='/'
				/>

				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Resume'
					route='/resume'
				/>

				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Projects'
					route='/projects'
				/>
			</div>
		</div>
	);
};

export default Navbar;
