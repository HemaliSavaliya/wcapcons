/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionImage: React.FC = () => {
	return (
		<div className='relative hidden w-0 flex-1 lg:block'>
			<img
				className='absolute inset-0 w-full object-cover'
				src='/images/section.jpg'
				alt=''
			/>
		</div>
	);
};

export default SectionImage;
