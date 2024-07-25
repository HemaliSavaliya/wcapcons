/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SectionImage from "../../commonImage/SectionImage";

interface Chip {
	category: string;
	chips: string[];
}

const initialChips: string[] = [
	"Ask India",
	"Gaming News",
	"Tech News",
	"India",
	"JEE",
	"Memes",
	"Delhi",
	"Indian Premier League",
	"Nostalgia",
	"Aviation",
	"Celebrity Gossip",
	"Mumbai",
];

const movieChips: string[] = [
	"Bollywood News",
	"Tollywood",
	"Hollywood",
	"Big Boss",
	"Movies",
	"Indian Cinema",
	"Shark Tank India",
];

const newsChips: string[] = [
	"Indian",
	"Sports",
	"Business",
	"Health",
	"World",
	"Tech",
	"Opinion",
	"Tech",
];

const techChips: string[] = [
	"Developers India",
	"Gadgets",
	"Google",
	"Futurology",
	"ChatGPT",
	"Microsoft",
	"AI & Machine Learning",
	"Programming",
	"Virtual Reality",
	"Smart Home",
	"PC Building",
];

const gamingChips: string[] = [
	"PC Gaming",
	"Steam",
	"Diablo",
	"Play station",
	"Nintendo",
	"Call of Duty",
	"Mine Craft",
	"Gaming Battle Station",
	"League of legends",
	"Cyberpunk 2077",
];

const memesChips: string[] = [
	"Samay Raina",
	"History Memes",
	"Funny",
	"Jokes",
	"Falls",
	"Bassi Says",
	"Funny and offbeat news",
	"Jokes",
	"Expectation vs Reality",
	"Bollywood Memes",
	"Mildly Infuriating",
];

const UserInterest: React.FC = () => {
	const [selectedChips, setSelectedChips] = useState<string[]>([]);
	const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({});
	const prefersDarkMode = useDarkMode();
	const router = useRouter();

	const onSubmit = () => {
		router.push("/user/invite");
	};

	const handleChipClick = (chip: string) => {
		setSelectedChips((prevSelectedChips) =>
			prevSelectedChips.includes(chip)
				? prevSelectedChips.filter((selected) => selected !== chip)
				: [...prevSelectedChips, chip],
		);
	};

	const handleShowMoreClick = (category: string) => {
		setShowMore((prevShowMore) => ({
			...prevShowMore,
			[category]: !prevShowMore[category],
		}));
	};

	const renderChips = (chips: any, category: any) => (
		<>
			<div className='flex flex-wrap gap-2 mt-3'>
				{chips
					.slice(0, showMore[category] ? chips.length : 4)
					.map((chip: any) => (
						<button
							key={chip}
							className={`p-2 rounded-lg ring-[0.5px] ring-inset text-sm lg:text-base ${
								selectedChips.includes(chip)
									? prefersDarkMode
										? "bg-custom-dark-chip ring-custom-dark-chip text-white" // Background color for selected chip in dark mode
										: "bg-custom-indigo ring-custom-indigo text-white" // Background color for selected chip in light mode
									: prefersDarkMode
									? "ring-custom-dark-text text-custom-dark-text" // Border color for unselected chip in dark mode
									: "ring-custom-ring text-custom-ring" // Border color for unselected chip in light mode
							}`}
							onClick={() => handleChipClick(chip)}>
							{chip} {selectedChips.includes(chip) ? "✕" : "+"}
						</button>
					))}
			</div>
			<div className='mt-4 text-center'>
				<div className='relative'>
					<div
						className='absolute inset-0 flex items-center'
						aria-hidden='true'>
						<div className='w-full border-t border-gray-200' />
					</div>
					<div className='relative flex justify-center text-sm font-medium leading-6'>
						<button
							className={`${
								prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
							} px-6 text-custom-indigo flex justify-center items-center`}
							onClick={() => handleShowMoreClick(category)}>
							{showMore[category] ? "Show Less" : "Show More"}
							{showMore[category] ? (
								<svg
									width='10'
									height='10'
									fill='#977CCC'
									className='ml-2'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'>
									<path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
								</svg>
							) : (
								<svg
									width='10'
									height='10'
									fill='#977CCC'
									className='ml-2'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'>
									<path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<div
			className={`flex min-h-full flex-1 h-screen overflow-hidden ${
				prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
			}`}>
			<SectionImage />

			<div className='flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none mr-2 lg:px-20 xl:px-24 overflow-x-hidden overflow-y-auto h-screen'>
				<div className='mx-auto w-full max-w-sm lg:w-96'>
					<div>
						<h2
							className={`mt-10 text-base lg:text-[26px] md:text-[26px] leading-9 tracking-tight ${
								prefersDarkMode ? "text-white" : "text-custom-ring"
							}`}>
							Dive into your passion!
						</h2>
						<p className='lg:mt-2 text-xs lg:text-base md:text-base text-custom-indigo hover:text-custom-indigo'>
							Choose minimum 5 interest area of yours.
						</p>
					</div>

					<div className='mt-11'>
						<div>
							<form autoComplete='off' className='space-y-6'>
								<div
									className={`w-full h-14 ${
										prefersDarkMode ? "bg-[#343439]" : "bg-zinc-100"
									} rounded-lg flex justify-between items-center`}>
									<input
										type='text'
										placeholder='What are you into?'
										className={`w-full h-full px-4 py-4 rounded-l-lg ${
											prefersDarkMode
												? "bg-[#343439] text-[#A0A0A0]"
												: "bg-zinc-100 text-neutral-400"
										} text-base font-normal outline-none`}
									/>
									<button
										type='submit'
										className={`w-16 h-full ${
											prefersDarkMode
												? "bg-custom-dark-indigo"
												: "bg-custom-indigo"
										} rounded-r-lg flex justify-center items-center`}>
										<img
											className='w-5 h-5'
											src='/images/search.png'
											alt='search'
										/>
									</button>
								</div>
							</form>

							<div className='lg:overflow-hidden lg:overflow-y-scroll h-full lg:h-[57vh] mt-12'>
								<div>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/trending.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											Trending
										</div>
									</div>
									{renderChips(initialChips, "trending")}
								</div>

								<div className='mt-12'>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/popcorn.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											Movies and Entertainment
										</div>
									</div>
									{renderChips(movieChips, "movies")}
								</div>

								<div className='mt-12'>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/news.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											News
										</div>
									</div>
									{renderChips(newsChips, "news")}
								</div>

								<div className='mt-12'>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/tech.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											Tech
										</div>
									</div>
									{renderChips(techChips, "tech")}
								</div>

								<div className='mt-12'>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/video-game.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											Gaming
										</div>
									</div>
									{renderChips(gamingChips, "gaming")}
								</div>

								<div className='mt-12'>
									<div className='justify-start items-center gap-3.5 inline-flex'>
										<div className='w-8 h-8 relative rounded'>
											<img
												src='/images/MaskHappy.png'
												alt='trending'
											/>
										</div>
										<div
											className={`${
												prefersDarkMode ? "text-white" : "text-custom-ring"
											} text-2xl font-normal`}>
											Humour and Memes
										</div>
									</div>
									{renderChips(memesChips, "memes")}
								</div>
							</div>

							<button
								type='submit'
								onClick={onSubmit}
								className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline mt-7 ${
									prefersDarkMode ? "bg-custom-dark-indigo" : "bg-custom-indigo"
								}`}>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInterest;
