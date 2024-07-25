/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import SectionImage from "../../commonImage/SectionImage";

const ProfilePicture: React.FC = () => {
	const [zoom, setZoom] = useState<number>(1);
	const [showUploadSection, setShowUploadSection] = useState<boolean>(false);
	const [isProfilePictureSaved, setIsProfilePictureSaved] =
		useState<boolean>(false); // New state for tracking if profile picture is saved
	const router = useRouter();
	const modalRef = useRef<HTMLDivElement>(null);
	const prefersDarkMode = useDarkMode();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setShowUploadSection(false);
			}
		};

		if (showUploadSection) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [showUploadSection]);

	const handleUploadClick = () => {
		setShowUploadSection(true);
	};

	const handleZoomChange = (newZoom: string) => {
		setZoom(parseFloat(newZoom));
	};

	const increaseZoom = () => {
		if (zoom < 2) {
			setZoom(zoom + 0.1);
		}
	};

	const decreaseZoom = () => {
		if (zoom > 1) {
			setZoom(zoom - 0.1);
		}
	};

	const handleClose = () => {
		setShowUploadSection(false);
	};

	const handleSave = () => {
		// Add your save logic here
		setShowUploadSection(false); // Close the upload section after saving
		setIsProfilePictureSaved(true);
	};

	const onSubmit = () => {
		router.push("/user/interest");
	};

	const getZoomBackground = () => {
		const percentage = ((zoom - 1) / 1) * 100;
		return prefersDarkMode
			? `linear-gradient(to right, #3E3E3E 0%, #3E3E3E ${percentage}%, #15151B ${percentage}%, #15151B 100%)`
			: `linear-gradient(to right, #3E3E3E 0%, #3E3E3E ${percentage}%, #fff ${percentage}%, #fff 100%)`;
	};

	return (
		<>
			<div
				className={`flex min-h-full flex-1 h-screen overflow-hidden ${
					prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
				}`}>
				<SectionImage />

				<div className='flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none mr-2 lg:px-20 xl:px-24 overflow-x-hidden overflow-y-auto h-screen relative'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<img
								className='h-9 lg:h-[75px] md:h-[75px] w-48 lg:w-[335px] md:w-[335px] mt-12'
								src={
									prefersDarkMode
										? "/images/dark-mode-logo.png"
										: "/images/light-mode-logo.png"
								}
								alt='Your Company'
							/>
							<h2
								className={`mt-16 lg:mt-20 text-sm lg:text-[26px] md:text-[26px] leading-9 tracking-tight ${
									prefersDarkMode ? "text-white" : "text-custom-ring"
								} text-center`}>
								Upload your profile picture
							</h2>
						</div>

						<div className='flex justify-center items-center mt-7'>
							<div
								className='w-40 h-40 lg:w-56 lg:h-56 rounded-full p-1'
								style={{
									background:
										"linear-gradient(to right, #2A7FF5, #19C0B6, #B76FF7)",
									backgroundClip: "border-box",
									border: "none",
								}}>
								<div
									className={`flex justify-center items-center w-full h-full ${
										prefersDarkMode ? "bg-[#2A2A2E]" : "bg-gray-200"
									} rounded-full`}>
									{/* Uncomment and add your upload icon or button inside here if needed */}
									<div
										className='text-7xl text-custom-indigo absolute cursor-pointer'
										onClick={handleUploadClick}>
										+
									</div>
								</div>
							</div>
						</div>
						<div className='mt-10'>
							<button
								className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline ${
									prefersDarkMode ? "bg-custom-dark-indigo" : "bg-custom-indigo"
								}`}
								onClick={onSubmit}>
								Next
							</button>
						</div>

						<div className='text-custom-indigo text-end mt-5 lg:mt-20 text-xl font-normal cursor-pointer'>
							{isProfilePictureSaved ? "Edit" : "Skip"}{" "}
							{/* Conditional rendering */}
						</div>
					</div>

					{/* add this div when upload button click */}
					{showUploadSection && (
						<div className='absolute inset-0 flex items-start justify-center z-50 bg-black bg-opacity-80 pt-16'>
							<div
								ref={modalRef}
								className={`mx-auto ${
									prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
								} rounded-lg p-4 shadow-lg w-full md:w-[60%] lg:w-[400px]`}>
								<div className='flex justify-between items-center'>
									<p
										className={`${
											prefersDarkMode
												? "text-custom-dark-text"
												: "text-custom-ring"
										} text-lg`}>
										Edit Profile
									</p>
									<button
										className={`${
											prefersDarkMode
												? "text-custom-dark-text"
												: "text-custom-ring"
										} text-lg`}
										onClick={handleClose}>
										<img
											src='/images/closeBtn.png'
											alt='close'
										/>
									</button>
								</div>
								<div className='border border-custom-ring mt-3' />
								<div className='flex justify-center relative w-full mt-6 pt-4 pb-60 rounded-lg overflow-hidden bg-[#ADBFC7]'>
									<div className='absolute w-56 h-56 object-cover rounded-lg z-10'>
										<img
											src='/images/ring.png'
											id='ringImage'
											alt='ring'
											className='w-full h-full object-cover rounded-lg'
										/>
									</div>
									<div
										className='absolute w-56 h-56 object-cover rounded-lg'
										style={{ clipPath: "circle(100% at center)" }}>
										<img
											src='/images/face.png'
											id='faceImage'
											alt='Avatar'
											className='w-full h-full object-cover rounded-lg'
											style={{
												transform: `scale(${zoom})`,
												// filter: "blur(5px)",
											}}
										/>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center justify-center mt-4'>
										<button
											onClick={decreaseZoom}
											className='mr-1'>
											<img
												src='/images/remove.png'
												alt='remove'
											/>
										</button>
										<input
											type='range'
											min='1'
											max='2'
											step='0.01'
											value={zoom}
											onChange={(e: ChangeEvent<HTMLInputElement>) =>
												handleZoomChange(e.target.value)
											}
											className='w-full progress'
											style={{ background: getZoomBackground() }}
										/>
										<button
											onClick={increaseZoom}
											className='ml-1'>
											<img
												src='/images/add.png'
												alt='add'
											/>
										</button>
									</div>
									<button
										className={`mt-4 px-5 py-2 ${
											prefersDarkMode
												? "text-white bg-custom-dark-indigo"
												: "bg-purple-600 text-white"
										} rounded-xl`}
										onClick={handleSave}>
										Save
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProfilePicture;