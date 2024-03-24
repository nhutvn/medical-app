import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';
import Social from './Social';
import DevImg from './DevImg';

const Hero = () => {
	return (
		<section className='py-12 xl:py-24 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
			<div className='container mx-auto'>
				<div className='flex justify-between gap-x-8'>
					<div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
						<div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
							Web Dev
						</div>
						<h1 className='h1 mb-4'>Lorem ipsum dolor sit.</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
							corporis sint nostrum ipsum beatae reprehenderit amet nisi optio,
							deserunt natus quidem facilis eum corrupti libero fuga dicta velit cum
							voluptatum!
						</p>
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-6 mx-auto xl:mx-0 mb-12'>
							<Link href='/contact'>
								<Button className='gap-x-2'>
									Contact me
									<Send size={18} />
								</Button>
							</Link>
							<Link href='/contact'>
								<Button
									className='gap-x-2'
									variant='link'>
									Download CV
									<Download size={18} />
								</Button>
							</Link>
						</div>
						<Social
							containerStyles='flex gap-x-6 mx-auto xl:mx-0'
							iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
						/>
					</div>
					<div className='hidden xl:flex relative'>
						<div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
							<DevImg
								imgSrc='/hero/developer.png'
								containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
							/>
						</div>
					</div>
				</div>
				<div className='hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-4 animate-bounce lg:bottom-8'>
					<RiArrowDownSLine className='text-3xl text-primary' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
