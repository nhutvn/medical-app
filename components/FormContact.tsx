'use client';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const FormContact = () => {
	return (
		<form
			action='/'
			className='flex flex-col gap-y-6'>
			<div className='relative flex items-center'>
				<Input
					type='name'
					id='name'
					placeholder='Name'
					className='pr-10'
				/>
				<User
					className='absolute right-3'
					size={20}
				/>
			</div>

			<div className='relative flex items-center'>
				<Input
					type='email'
					id='name'
					placeholder='Email'
					className='pr-10'
				/>
				<MailIcon
					className='absolute right-3'
					size={20}
				/>
			</div>

			<div className='relative flex items-center'>
				<Textarea
					placeholder='Enter message'
					className='pr-10'
				/>
				<MessageSquare
					className='absolute right-3 top-4'
					size={20}
				/>
			</div>
			<Button
				type='submit'
				className='flex items-center gap-x-1 max-w-[166px]
            '>
				Let&apos;s Talk
				<ArrowRightIcon size={20} />
			</Button>
		</form>
	);
};
export default FormContact;
