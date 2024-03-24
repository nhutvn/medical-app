import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

const links = [
	{ path: '/', name: 'Home' },
	{ path: '/projects', name: 'Projects' },
	{ path: '/contact', name: 'Contact' },
];

interface IProps {
	containerStyles?: any;
	linkStyles?: any;
	underlineStyles?: any;
}
const Nav = ({ containerStyles, linkStyles, underlineStyles }: IProps) => {
	const path = usePathname();
	return (
		<nav className={`${containerStyles}`}>
			{links.map((item, index) => {
				return (
					<Link
						key={index}
						className={linkStyles}
						href={item.path}>
						{item.path === path && (
							<motion.span
								initial={{ y: '-100%' }}
								animate={{ y: 0 }}
								transition={{ type: 'tween' }}
								layoutId='underLine'
								className={underlineStyles}
							/>
						)}
						{item.name}
					</Link>
				);
			})}
		</nav>
	);
};
export default Nav;
