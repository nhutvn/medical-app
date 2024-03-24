import FormContact from '@/components/FormContact';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';

const ContactPage = () => {
	return (
		<section>
			<div className='container mx-auto'>
				<div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
					<div className='flex flex-col justify-center'>
						<div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
							<span className='w-[30px] h-[2px] bg-primary'></span>
							<div>Say Hello </div>
						</div>
						<h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together.</h1>
						<p className='subtitle max-w-[400px]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
							magnam, a est accusantium labore voluptas ratione reprehenderit in
							aliquid delectus maxime molestiae quam temporibus harum exercitationem
							laudantium, eaque, ipsum distinctio?
						</p>
					</div>
					{/* ilustrations */}
					<div className='hidden xl:flex w-full bg-contact_illustration_bg_light dark:bg-contact_illustration_bg_dark bg-contain bg-top bg-no-repeat'></div>
				</div>
				{/* info text & form */}
				<div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
					<div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
						{/* mail */}
						<div className='flex items-center gap-x-4'>
							<MailIcon
								size={18}
								className='text-primary'
							/>
							<div>your@gmail.com</div>
						</div>
						{/* phone */}
						<div className='flex items-center gap-x-4'>
							<PhoneCall
								size={18}
								className='text-primary'
							/>
							<div>+84 961042098</div>
						</div>
						{/* address */}
						<div className='flex items-center gap-x-4'>
							<HomeIcon
								size={18}
								className='text-primary'
							/>
							<div>TP.HCM, Viet Nam</div>
						</div>
					</div>
					<FormContact />
				</div>
			</div>
		</section>
	);
};
export default ContactPage;
