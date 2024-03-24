'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface IProps {
	children: React.ReactNode;
	[key: string]: any;
	// Define other props here
}

const ThemeProvider = ({ children, ...props }: IProps) => {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
export default ThemeProvider;
