/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import React, { useEffect, useState } from "react";

interface ColorButtonProps {
	color: string;
	isActive: boolean;
	onClick: () => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({
	color,
	isActive,
	onClick,
}) => (
	<button
		className='w-10 h-10 lg:w-12 lg:h-12 rounded-full relative'
		style={{ background: color }}
		onClick={onClick}>
		{isActive && (
			<span className='absolute inset-0 flex justify-center items-center'>
				<img
					src='/images/CheckCircle.png'
					alt='check'
				/>
			</span>
		)}
	</button>
);

const UserInvite: React.FC = () => {
	const [cardImage, setCardImage] = useState<string>("/images/card1.png");
	const prefersDarkMode = useDarkMode();

	const handleCardChange = (image: string) => {
		setCardImage(image);
	};

	const getTextColor = (): string => {
		if (
			cardImage === "/images/card5.png" ||
			cardImage === "/images/card6.png" ||
			cardImage === "/images/card7.png"
		) {
			return "text-black";
		}
		return "text-custom-chip-bg";
	};

	const getRingColor = (): string => {
		if (
			cardImage === "/images/card5.png" ||
			cardImage === "/images/card6.png" ||
			cardImage === "/images/card7.png"
		) {
			return "ring-custom-ring";
		}
		return "ring-[#C5C5C5]";
	};

	const getBgColor = (): string => {
		if (
			cardImage === "/images/card5.png" ||
			cardImage === "/images/card6.png" ||
			cardImage === "/images/card7.png"
		) {
			return "bg-custom-chip-bg";
		}
		return "bg-custom-chip-bg bg-opacity-25";
	};

	return (
		<>
			<div
				className={`lg:flex min-h-full flex-1 h-screen overflow-hidden ${
					prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
				}`}>
				<div className='relative hidden w-0 flex-1 lg:flex justify-center items-center'>
					<span
						className={`text-xl flex justify-center items-center w-[1002px] h-[350px] z-50 ml-[113px] mr-[46px] mt-[259px] mb-[241px] ${
							prefersDarkMode ? "bg-white" : "bg-custom-ring"
						}`}></span>
				</div>

				<div className='relative flex-1 z-10'>
					{/* Background Gradient */}
					<div
						className='absolute'
						style={{
							background:
								"linear-gradient(0deg, rgba(25, 192, 182, 0.80) 61.01%, #B76FF7 67.68%)",
							filter: "blur(300px)",
							width: " 979px",
							height: "979px",
							zIndex: -1,
						}}></div>
					<div
						className={`flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none mr-2 lg:px-20 xl:px-24 overflow-x-hidden overflow-y-auto h-screen ${
							prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
						}`}>
						<div className='mx-auto w-full max-w-sm lg:w-96'>
							<div>
								<h1
									className={`text-xl lg:text-[26px] md:text-[26px] leading-9 mb-1 ${
										prefersDarkMode ? "text-white" : "text-custom-ring"
									} text-start`}>
									Bring your crew and join the buzz!
								</h1>
								<p className='mt-1 lg:mt-3 mb-3 text-sm lg:text-base md:text-base text-start text-custom-indigo'>
									Lets connect!
								</p>
							</div>

							<div>
								<div className='relative flex justify-center'>
									<img
										src={cardImage}
										alt='Background Card'
										className='w-full md:w-[400px] lg:w-[400px] sm:w-[400px] h-[225px] md:h-auto sm:h-auto lg:h-auto rounded-2xl'
									/>
									<div className='absolute p-4'>
										<div className='absolute top-4 right-4'>
											<div
												className={`${getBgColor()} rounded-l-xl h-6 w-36 relative`}>
												<span className={`ml-4 text-sm ${getTextColor()}`}>
													Earn your XP
												</span>
											</div>
											<div className='absolute -top-1 -right-2'>
												<span className='absolute flex justify-center items-center top-0 right-0 left-0 bottom-0 text-black'>
													0
												</span>
												<img
													src='/images/coin.png'
													alt='coins'
													className='w-8 h-8'
												/>
											</div>
										</div>
										<div
											className={`bg-opacity-75 rounded-lg mt-6 lg:mt-4 ${getTextColor()}`}>
											<div className='flex'>
												<div className='mr-4'>
													<img
														src='/images/card.png'
														alt='card'
														className='w-16 h-16 rounded-full'
													/>
												</div>
												<div className='text-start'>
													<h2
														className={`text-base lg:text-2xl ${getTextColor()}`}>
														XYZ ABC
													</h2>
													<p
														className={`${getTextColor()} text-xs lg:text-sm pt-3`}>
														@Content creator
													</p>
												</div>
											</div>
											<p
												className={`text-xs lg:text-sm pt-4 ${getTextColor()}`}>
												A Profession with 10 years of Experience in Content
												Creation
											</p>
										</div>
										<div
											className={`${getRingColor()} ring-[0.3px] mt-4 lg:mt-8`}
										/>
										<div
											className={`flex text-xs pt-4 items-center ${getTextColor()}`}>
											<p>Circles you have joined - 0</p>
											<div
												className={`${getRingColor()} ring-[0.3px] h-[31px] mx-4 rotate-180`}
											/>
											<p>Connections you have - 0</p>
										</div>
									</div>
								</div>
								<p className='mb-4 text-custom-indigo mt-3 text-start lg:text-center text-sm lg:text-2xl'>
									Your profile card is all set up—time to shine!
								</p>
								<div className='block lg:flex pt-12'>
									<div
										className={`pt-2 text-base lg:text-2xl ${
											prefersDarkMode ? "text-white" : "text-custom-ring"
										}`}>
										Choose your card color
									</div>
									<div className='grid grid-cols-7 lg:grid-cols-4 gap-6 mt-4 lg:mt-0'>
										<ColorButton
											color='linear-gradient(90deg, #3F2970 0%, #322258 45%, #7F2A69 97%)'
											isActive={cardImage === "/images/card1.png"}
											onClick={() => handleCardChange("/images/card1.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #AB001F 0%, #9F0C85 47%, #9AA6AD 100%)'
											isActive={cardImage === "/images/card2.png"}
											onClick={() => handleCardChange("/images/card2.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #274A76 0%, #3A7D98 100%)'
											isActive={cardImage === "/images/card3.png"}
											onClick={() => handleCardChange("/images/card3.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #792316 0%, #A07078 47%, #92737C 65%, #448790 100%)'
											isActive={cardImage === "/images/card4.png"}
											onClick={() => handleCardChange("/images/card4.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #D5D5DA 0%, #B2C8D4 45%, #69A6C1 100%)'
											isActive={cardImage === "/images/card5.png"}
											onClick={() => handleCardChange("/images/card5.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #8B9EA5 0%, #BDAE90 45%, #BD8758 100%)'
											isActive={cardImage === "/images/card6.png"}
											onClick={() => handleCardChange("/images/card6.png")}
										/>
										<ColorButton
											color='linear-gradient(90deg, #D1DCDC 0%, #E1EAE7 45%, #95CDD2 100%)'
											isActive={cardImage === "/images/card7.png"}
											onClick={() => handleCardChange("/images/card7.png")}
										/>
									</div>
								</div>
								<button
									className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline mt-16 ${
										prefersDarkMode
											? "bg-custom-dark-indigo"
											: "bg-custom-indigo"
									}`}>
									Send Invites
								</button>
							</div>
						</div>
						<div className='flex justify-center items-center'>
							<div
								className={`lg:hidden flex justify-center items-center mt-10 text-sm font-light leading-4 whitespace-nowrap rounded-xl ${
									prefersDarkMode ? "bg-white" : "bg-zinc-300"
								} w-[340px] h-[210px] text-neutral-700`}>
								Video
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserInvite;
