import { GanttChartSquare, Blocks, Gem } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { title } from 'process';
//mockup data
interface IService {
	icon: any;
	title: string;
	description: string;
}

const servicesData: IService[] = [
	{
		icon: (
			<GanttChartSquare
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'Web Design',
		description: ' Coast-to-coast US radio. Meet a linguist.',
	},
	{
		icon: (
			<Blocks
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'Web Design',
		description: 'Listen and learn from experts — A fun conversational program.',
	},
	{
		icon: (
			<Gem
				size={72}
				strokeWidth={0.8}
			/>
		),
		title: 'Web Design',
		description:
			'Available anywhere in the world. Join hundreds of thousands of fans of A Way with Words in listening every week.',
	},
];

//
const Services = () => {
	return (
		<section>
			<div className='container mx-auto'>
				<h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My services</h2>
				<div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					{servicesData.map((serviceInfo, index) => {
						return (
							<Card
								key={index}
								className='w-full m-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
								<CardHeader className='text-primary absolute -top-[60px]'>
									<div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
										{serviceInfo.icon}
									</div>
								</CardHeader>
								<CardContent className='text-center'>
									<CardTitle className='mb-4'>{serviceInfo.title}</CardTitle>
									<CardDescription className='text-lg'>
										{serviceInfo.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Services;
