import { useEffect, useState } from 'react';

const useScrollProgress = () => {
	const [completion, setCompletion] = useState(0);
	useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress = window.scrollY;
			const scrollHeight = document.body.scrollHeight - window.innerHeight;
			console.log('useScrollProgress start ', scrollHeight);

			if (scrollHeight) {
				setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
			}
		};
		window.addEventListener('scroll', updateScrollCompletion);
		// unMount remove event listener
		return () => window.removeEventListener('scroll', updateScrollCompletion);
	}, []);
	return completion;
};
export default useScrollProgress;
