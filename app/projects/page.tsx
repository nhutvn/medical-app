'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

interface IProject {
	image: string;
	category: string;
	name: string;
	desc: string;
	link: string;
	github: string;
}

// mock data
const projectData: IProject[] = [
	{
		image: '/work/3.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident minus et excepturi saepe incidunt!',
		link: '/',
		github: '/',
	},
	{
		image: '/work/3.png',
		category: 'next js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident minus et excepturi saepe incidunt!',
		link: '/',
		github: '/',
	},
	{
		image: '/work/2.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident minus et excepturi saepe incidunt!',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'C#',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident minus et excepturi saepe incidunt!',
		link: '/',
		github: '/',
	},
	{
		image: '/work/4.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident minus et excepturi saepe incidunt!',
		link: '/',
		github: '/',
	},
];

interface ProjectData {
	category: string;
	// Add other properties if needed
}

const ProjectsPage = () => {
	const [categories, setCategories] = useState(() => [
		'all projects',
		...new Set(projectData.map((item: ProjectData) => item.category)),
	]);

	const [category, setCategory] = useState('all projects');

	const fillteredProjects = projectData.filter((item) => {
		return category === 'all projects' ? item : item.category === category;
	});

	return (
		<section className='min-h-screen pt-12 pb-24 xl:pb-36'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
				<Tabs defaultValue='all projects'>
					<TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
						{categories.map((categoryItem, index) => {
							return (
								<TabsTrigger
									key={index}
									onClick={() => setCategory(categoryItem)}
									className='capitalize'
									value={categoryItem}>
									{categoryItem}
								</TabsTrigger>
							);
						})}
					</TabsList>
					<div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
						{fillteredProjects.map((project, index) => {
							return (
								<TabsContent
									value={category}
									key={index}>
									<ProjectCard project={project} />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
};
export default ProjectsPage;
