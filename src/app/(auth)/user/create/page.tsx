/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SectionImage from "../../commonImage/SectionImage";

interface FormData {
	name: string;
	firstName: string;
	countryCode: string;
	phoneNumber: string;
	yourself: string;
}

// Define an array of country codes and names
const countryCodes = [
	{ code: "+91", name: "India" },
	{ code: "+1", name: "US" },
	{ code: "+44", name: "UK" },
	{ code: "+61", name: "Australia" },
	{ code: "+81", name: "Japan" },
];

const CreateUser: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const [availableUsernames, setAvailableUsernames] = useState([
		"done",
		"life@1",
	]);
	const [selectedCountryCode, setSelectedCountryCode] = useState("");
	const router = useRouter();
	const prefersDarkMode = useDarkMode();

	const handleChangeCountryCode = (e: any) => {
		setSelectedCountryCode(e.target.value);
	};

	const onSubmit = (data: FormData) => {
		console.log(data); // Handle the form submission logic

		router.push("/user/upload");
	};

	const handleRemoveUsername = (username: string) => {
		setAvailableUsernames(
			availableUsernames.filter((name) => name !== username),
		);
	};

	return (
		<div
			className={`flex min-h-full flex-1 h-screen overflow-hidden ${
				prefersDarkMode ? "bg-custom-dark-bg" : "bg-white"
			}`}>
			<SectionImage />

			<div className='flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none mr-2 lg:px-20 xl:px-24 overflow-x-hidden overflow-y-auto h-screen'>
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
							className={`mt-11 text-base lg:text-[26px] md:text-[26px] leading-9 tracking-tight ${
								prefersDarkMode ? "text-white" : "text-custom-ring"
							}`}>
							Create Username
						</h2>
						<p className='mt-2 text-xs lg:text-base md:text-base text-custom-indigo hover:text-custom-indigo'>
							Create your unique username
						</p>
					</div>

					<div className='mt-11'>
						<div>
							<form
								autoComplete='off'
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-6'>
								<div className='mt-2'>
									<input
										id='name'
										type='text'
										placeholder='Eg. "Vivid life quality'
										className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
											prefersDarkMode
												? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
												: "placeholder:text-custom-placeholder ring-custom-ring text-black"
										}`}
										{...register("name", {
											required: "Circle name not available. Try another?",
										})}
									/>
									{errors.name && (
										<p className='text-red-500 text-sm mt-2'>
											{errors.name.message}
										</p>
									)}
								</div>
								<div className='justify-center items-center gap-4 inline-flex'>
									<div className='text-neutral-400 text-xl font-normal'>
										Available:
									</div>
									<div className='justify-start items-start grid grid-cols-1 lg:grid-cols-2 gap-2'>
										{availableUsernames.map((username) => (
											<div
												key={username}
												className='h-9 p-2.5 rounded-lg border border-neutral-400 flex-col justify-center items-start gap-2.5 inline-flex'>
												<div className='justify-start items-start gap-3 inline-flex'>
													<div className='text-neutral-400 text-base font-light leading-snug'>
														{username}
													</div>
													<div className='w-5 h-5 relative'>
														<img
															src='/images/close.png'
															alt='close'
															className='cursor-pointer'
															onClick={() => handleRemoveUsername(username)}
														/>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className='hidden lg:block'>
									<div className='mt-2'>
										<input
											id='firstName'
											type='text'
											placeholder='First Name'
											className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
												prefersDarkMode
													? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
													: "placeholder:text-custom-placeholder ring-custom-ring text-black"
											}`}
											{...register("firstName", {
												required: "First name is required",
											})}
										/>
										{errors.firstName && (
											<p className='text-red-500 text-sm mt-2'>
												{errors.firstName.message}
											</p>
										)}
									</div>
								</div>
								<div className='mt-2 space-x-2 hidden lg:block'>
									<div className='mt-2 flex space-x-2'>
										<div className='relative'>
											<label
												htmlFor='country-code'
												className='sr-only'>
												Country Code
											</label>
											<select
												id='country-code'
												{...register("countryCode", {
													required: "Country code is required",
												})}
												value={selectedCountryCode}
												onChange={handleChangeCountryCode}
												className={`w-28 rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
													prefersDarkMode
														? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
														: "ring-custom-ring text-black"
												}`}>
												{/* <option value=''>Select Country Code</option> */}
												{/* Map over the country codes array to generate options */}
												{countryCodes.map((country) => (
													<option
														key={country.code}
														value={country.code}>
														{`${country.code}`}
													</option>
												))}
											</select>
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
												<svg
													className='h-4 w-4'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													fill='currentColor'
													aria-hidden='true'>
													<path
														fillRule='evenodd'
														d='M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
										</div>
										<input
											id='phone-number'
											type='tel'
											placeholder='Phone number'
											className={`w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
												prefersDarkMode
													? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
													: "placeholder:text-custom-placeholder ring-custom-ring text-black"
											}`}
											{...register("phoneNumber", {
												required: "Phone number is required",
											})}
										/>
									</div>
									{errors.phoneNumber && (
										<p className='text-red-500 text-sm mt-2'>
											{errors.phoneNumber.message}
										</p>
									)}
								</div>
								<div>
									<div className='mt-2'>
										<textarea
											id='yourself'
											placeholder='Describe yourself!'
											className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
												prefersDarkMode
													? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
													: "placeholder:text-custom-placeholder ring-custom-ring text-black"
											}`}
											{...register("yourself", {
												required: "Description is required",
												maxLength: {
													value: 50,
													message: "Description cannot exceed 50 words",
												},
											})}
										/>
										{errors.yourself && (
											<p className='text-red-500 text-sm mt-2'>
												{errors.yourself.message}
											</p>
										)}
									</div>
								</div>
								<p className='mt-3 text-custom-indigo hover:text-custom-indigo text-end'>
									max. 50 words
								</p>
								<button
									type='submit'
									className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline mt-6 ${
										prefersDarkMode
											? "bg-custom-dark-indigo"
											: "bg-custom-indigo"
									}`}>
									Next
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
