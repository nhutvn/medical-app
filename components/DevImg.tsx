import Image from 'next/image';

interface IProps {
	containerStyles?: any;
	imgSrc?: any;
}

const DevImg = ({ containerStyles, imgSrc }: IProps) => {
	return (
		<div className={`${containerStyles}`}>
			<Image
				src={imgSrc}
				fill
				priority
				alt=''
			/>
		</div>
	);
};
export default DevImg;
