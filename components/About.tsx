'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneIcon,
	GraduationCap,
	Calendar,
	Briefcase,
} from 'lucide-react';
import DevImg from './DevImg';
import Image from 'next/image';

interface IEducation {
	university: string;
	qualification: string;
	years: string;
}

interface IExperience {
	company: string;
	role: string;
	years: string;
}

interface ISkill {
	name: string;
}

interface ITools {
	imgPath: string;
}

interface IQualificationData {
	title: string;
	data: IEducation[] | IExperience[] | ISkill[] | ITools[];
}

const infoDatas = [
	{
		icon: <User2 size={20} />,
		text: 'Minh Nhut',
	},
	{
		icon: <PhoneIcon size={20} />,
		text: '+84 961 042098',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'leminhnhut12cb2htp@gmail.com',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Minh Nhut',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Viet Nam',
	},
];

const qualificationData: IQualificationData[] = [
	{
		title: 'education',
		data: [
			{
				university: 'A University',
				qualification: 'Science',
				years: '2015 - 2018',
			},
			{
				university: 'A University',
				qualification: 'Science',
				years: '2015 - 2018',
			},
			{
				university: 'A University',
				qualification: 'Science',
				years: '2015 - 2018',
			},
		],
	},
	{
		title: 'experience',
		data: [
			{
				company: 'FPT1',
				role: 'Software Engineer',
				years: '2015 - 2018',
			},
			{
				company: 'FPT2',
				role: 'Software Engineer',
				years: '2015 - 2018',
			},
			{
				company: 'FPT3',
				role: 'Software Engineer',
				years: '2015 - 2018',
			},
		],
	},
];

const skillData = [
	{
		title: 'skills',
		data: [
			{ name: 'html/css' },
			{ name: 'javascript' },
			{ name: '.net' },
			{ name: 'php' },
			{ name: 'python' },
		],
	},
	{
		title: 'tools',
		data: [
			{ imgPath: '/about/vscode.svg' },
			{ imgPath: '/about/figma.svg' },
			{ imgPath: '/about/notion.svg' },
			{ imgPath: '/about/wordpress.svg' },
		],
	},
];

const About = () => {
	const getData = ({ arr, title }: { arr: IQualificationData[]; title: string }) => {
		return arr.find((item) => item.title == title);
	};
	return (
		<section className='xl:h-[860px] pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
				<div className='flex xl:flex-row'>
					<div className='hidden xl:flex flex-1 relative'>
						<DevImg
							containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
							imgSrc='/about/developer.png'
						/>
					</div>

					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='personal'>
									Personal Inf
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='qualifications'>
									Qualifications
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='skills'>
									Skills
								</TabsTrigger>
							</TabsList>
							<div className='text-lg mt-12 xl:mt-8'>
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-4'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
										</h3>
										<p className='subtitle'>
											Voluptates hic laborum exercitationem? Beatae, fuga eum?
											Autem aut recusandae eius cumque incidunt soluta itaque
											eos, ratione molestias error voluptatem exercitationem
											necessitatibus.
										</p>
										<div className='grid xl:grid-cols-2 gap-4 mb-12'>
											{infoDatas.map((info, index) => {
												return (
													<div
														className='flex items-center gap-x-4 mx-auto xl:mx-0'
														key={index}>
														<div className='text-primary'>
															{info.icon}
														</div>
														<div>{info.text}</div>
													</div>
												);
											})}
										</div>

										<div className='flex flex-col gap-y-2'>
											<div className='text-primary'>Language Skill</div>
											<div className='border-b border-border'></div>
											<div>English, Japanese</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='qualifications'>
									<div>
										<h3>My aware some jouney</h3>
										<div className='grid md:grid-cols-2 gap-y-8'>
											{/* experience */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<Briefcase size={28} />
													<h4 className='capitalize font-medium'>
														{
															getData({
																arr: qualificationData,
																title: 'experience',
															})?.title
														}
													</h4>
												</div>
												<div className='flex flex-col gap-y-8'>
													{getData({
														arr: qualificationData,
														title: 'experience',
													})?.data.map((item, index) => {
														if ('company' in item) {
															// This item represents an experience object
															const { company, role, years } = item;
															return (
																<div
																	className='flex gap-x-8 group'
																	key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className=' w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>
																	<div>
																		<div className=' font-semibold text-xl leading-none mb-2'>
																			{company}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{role}
																		</div>
																		<div className='text-base font-medium'>
																			{years}
																		</div>
																	</div>
																</div>
															);
														}
													})}
												</div>
											</div>
											{/* education */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<Calendar size={28} />
													<h4 className='capitalize font-medium'>
														{
															getData({
																arr: qualificationData,
																title: 'education',
															})?.title
														}
													</h4>
												</div>
												<div className='flex flex-col gap-y-8'>
													{getData({
														arr: qualificationData,
														title: 'education',
													})?.data.map((item, index) => {
														if ('university' in item) {
															// This item represents an experience object
															const {
																university,
																qualification,
																years,
															} = item;
															return (
																<div
																	className='flex gap-x-8 group'
																	key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className=' w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>
																	<div>
																		<div className=' font-semibold text-xl leading-none mb-2'>
																			{university}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{qualification}
																		</div>
																		<div className='text-base font-medium'>
																			{years}
																		</div>
																	</div>
																</div>
															);
														}
													})}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='skills'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-8'>Tool i use every day</h3>
										<div className='mb-16'>
											<h4 className='text-xl font-semibold mb-2 xl:text-left'>
												Skills
											</h4>
											<div className='border-b border-border mb-4'></div>
											<div>
												{getData({
													arr: skillData,
													title: 'skills',
												})?.data.map((item, index) => {
													if ('name' in item) {
														const { name } = item;
														return (
															<div
																className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
																key={index}>
																<div className='font-medium'>
																	{name}
																</div>
															</div>
														);
													}
												})}
											</div>
										</div>
										<div>
											<h4 className='text-xl font-semibold mb-2 xl:text-left'>
												Tools
											</h4>
											<div className='border-b border-border mb-4'></div>
											<div className='flex gap-x-8 justify-center xl:justify-start'>
												{getData({
													arr: skillData,
													title: 'tools',
												})?.data.map((item, index) => {
													if ('imgPath' in item) {
														const { imgPath } = item;
														return (
															<div key={index}>
																<Image
																	src={imgPath}
																	width={48}
																	height={48}
																	alt=''
																	priority
																/>
															</div>
														);
													}
												})}
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
