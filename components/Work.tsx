'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper';
import Link from 'next/link';
import { Button } from './ui/button';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
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
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/3.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/2.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/4.png',
		category: 'react js',
		name: 'Nexa website',
		desc: 'Aliquid quas cupiditate, labore, facere, nesciunt assumenda fugiat provident.',
		link: '/',
		github: '/',
	},
];

const Work = () => {
	return (
		<section className='relative mb-12 xl:mb-48 mt-32'>
			<div className='container mx-auto'>
				<div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:justify-start'>
					<h2 className='section-title mb-4'>Latest Project</h2>
					<p className='subtitle mb-8'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
						cupiditate.
					</p>
					<Link href='/projects'>
						<Button>All project</Button>
					</Link>
				</div>
				<div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
					<Swiper
						className='h-[520px]'
						slidesPerView={1}
						breakpoints={{ 640: { slidesPerView: 2 } }}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{ clickable: true }}>
						{projectData.slice(0, 4).map((project, index) => {
							return (
								<SwiperSlide key={index}>
									<ProjectCard project={project} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
export default Work;
