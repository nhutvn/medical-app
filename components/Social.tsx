'use client';
import Link from 'next/link';
import {
	RiYoutubeFill,
	RiGithubFill,
	RiLinkedinFill,
	RiInstagramFill,
	RiFacebookFill,
} from 'react-icons/ri';

const icons = [
	{ id: 1, path: '/', name: <RiGithubFill /> },
	{ id: 2, path: '/', name: <RiFacebookFill /> },
	{
		id: 3,
		path: '/',
		name: <RiInstagramFill />,
	},
	{
		id: 4,
		path: '/',
		name: <RiYoutubeFill />,
	},
	{
		id: 5,
		path: '/',
		name: <RiLinkedinFill />,
	},
];

interface IProps {
	containerStyles?: any;
	iconStyles?: any;
}

const Social = ({ containerStyles, iconStyles }: IProps) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link
						href={icon.path}
						key={icon.id}>
						<div className={`${iconStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};
export default Social;
