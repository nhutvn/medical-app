'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';

import { usePathname } from 'next/navigation';

const Header = () => {
	const [header, setHeader] = useState(false);
	const path = usePathname();

	useEffect(() => {
		const updateHeader = () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		};
		window.addEventListener('scroll', updateHeader);

		// unmount remove event listener
		return () => window.removeEventListener('scroll', updateHeader);
	});

	return (
		<header
			className={`${
				header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
			} sticky top-0 z-30 transition-all ${path === '/' && 'bg-[#fef9f5]'}`}>
			<div className='container mx-auto'>
				<div className='flex justify-between item-center'>
					<Logo />
					<div className='flex items-center gap-x-6'>
						{/* nav */}
						<Nav
							containerStyles='hidden xl:flex gap-x-8 items-center bg-red'
							linkStyles='relative hover:text-primary transaction-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
						/>
						<ThemeToggler />
						{/* mobile nav */}
						<div className='xl:hidden'>
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
