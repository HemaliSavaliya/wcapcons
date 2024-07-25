/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionImage from "../commonImage/SectionImage";

interface FormValues {
	password: string;
	confirmPassword: string;
}

const ResetPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const prefersDarkMode = useDarkMode();

	const password = useRef<string>("");
	password.current = watch("password", "");

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
		setModalVisible(true);

		// Close the modal after 2 seconds
		setTimeout(() => {
			setModalVisible(false);
		}, 2000);
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
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
							className={`mt-14 text-base lg:text-3xl md:text-3xl leading-9 font-normal ${
								prefersDarkMode ? "text-white" : "text-custom-ring"
							}`}>
							Reset your Password
						</h2>
					</div>

					<div className='mt-11'>
						<div>
							<form
								autoComplete='off'
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-6'>
								<div className='mt-2 relative'>
									<input
										id='password'
										type={passwordVisible ? "text" : "password"}
										autoComplete='password'
										placeholder='New Password'
										className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-1 ring-inset sm:text-xl sm:leading-6 px-4 py-4 outline-0 ${
											prefersDarkMode
												? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
												: "placeholder:text-custom-placeholder ring-custom-ring text-black"
										}`}
										{...register("password", {
											required: "Please enter your new password",
											minLength: {
												value: 8,
												message: "Password must be at least 8 characters long",
											},
										})}
									/>
									<div className='absolute top-4 right-0 flex items-center pr-3'>
										<button
											type='button'
											onClick={togglePasswordVisibility}>
											{passwordVisible ? (
												<svg
													fill='#E8EAED'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 576 512'
													width='24'
													height='24'>
													<path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z' />
												</svg>
											) : (
												<svg
													fill='#E8EAED'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 640 512'
													width='24'
													height='24'>
													<path d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C138.1 360.1 113.3 329.8 97 304.3c14.3-26.6 34.6-56.4 62.8-83.4l-37.2-29.2c-30 28.9-54.3 61.5-71.6 95.8c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c43.5 0 83.5-10.5 119.2-27.8zM233.3 177.5L265 202.5c-5.8 10.4-9 22.4-9 35.5c0 44.2 35.8 80 80 80c12.1 0 23.6-2.7 33.9-7.5l28.4 22.3C393.4 351.6 357.3 368 320 368c-70.7 0-128-57.3-128-128c0-24.7 7.1-47.7 19.3-66.5z' />
												</svg>
											)}
										</button>
									</div>
									{errors.password && (
										<p className='text-red-500 text-sm mt-2'>
											{errors.password.message}
										</p>
									)}
								</div>
								<div className='mt-2 relative'>
									<input
										id='confirmPassword'
										type={confirmPasswordVisible ? "text" : "password"}
										autoComplete='password'
										placeholder='Re-enter your new password'
										className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-1 ring-inset sm:text-xl sm:leading-6 px-4 py-4 outline-0 ${
											prefersDarkMode
												? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
												: "placeholder:text-custom-placeholder ring-custom-ring text-black"
										}`}
										{...register("confirmPassword", {
											required: "Please confirm your new password",
											validate: (value) =>
												value === password.current || "Passwords do not match",
										})}
									/>
									<div className='absolute top-4 right-0 flex items-center pr-3'>
										<button
											type='button'
											onClick={toggleConfirmPasswordVisibility}>
											{confirmPasswordVisible ? (
												<svg
													fill='#E8EAED'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 576 512'
													width='24'
													height='24'>
													<path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z' />
												</svg>
											) : (
												<svg
													fill='#E8EAED'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 640 512'
													width='24'
													height='24'>
													<path d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C138.1 360.1 113.3 329.8 97 304.3c14.3-26.6 34.6-56.4 62.8-83.4l-37.2-29.2c-30 28.9-54.3 61.5-71.6 95.8c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c43.5 0 83.5-10.5 119.2-27.8zM233.3 177.5L265 202.5c-5.8 10.4-9 22.4-9 35.5c0 44.2 35.8 80 80 80c12.1 0 23.6-2.7 33.9-7.5l28.4 22.3C393.4 351.6 357.3 368 320 368c-70.7 0-128-57.3-128-128c0-24.7 7.1-47.7 19.3-66.5z' />
												</svg>
											)}
										</button>
									</div>
									{errors.confirmPassword && (
										<p className='text-red-500 text-sm mt-2'>
											{errors.confirmPassword.message}
										</p>
									)}
								</div>
								<button
									type='submit'
									className={`flex w-full h-10 lg:h-14 md:h-14 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white mt-8 lg:mt-20 hover:bg-custom-indigo focus-visible:outline ${
										prefersDarkMode
											? "bg-custom-dark-indigo"
											: "bg-custom-indigo"
									}`}>
									Reset
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			{modalVisible && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='flex justify-center items-center w-64 sm:w-96 md:w-96 lg:w-96 h-32 p-1 rounded-2xl shadow-lg bg-gradient-to-r from-[#2A7FF5] via-[#19C0B6] to-[#B76FF7]'>
						<div
							className={`flex w-full h-full items-center rounded-2xl justify-center text-xl lg:text-3xl md:text-3xl text-custom-ring ${
								prefersDarkMode ? "bg-custom-dark-bg text-white" : "bg-white"
							} back`}>
							<p>Your password is set!</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResetPassword;
