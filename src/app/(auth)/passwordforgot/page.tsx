/* eslint-disable @next/next/no-img-element */
"use client";

import forgotResolver, { FormData } from "@/app/utils/forgotResolver";
import useDarkMode from "@/app/utils/useDarkMode";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionImage from "../commonImage/SectionImage";

const ForgotPassword: React.FC = () => {
	const prefersDarkMode = useDarkMode();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: forgotResolver, mode: "onSubmit" });

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		// router.push("/resetPassword");
	};
	console.log("error", errors);

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
							Forgot Password
						</h2>
						<p
							className={`mt-0 text-custom-indigo hover:text-custom-indigo lg:mt-2 text-xs lg:text-xl leading-6`}>
							Enter your email Id to reset your password
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
										id='email'
										type='email'
										placeholder='Email address'
										className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
											prefersDarkMode
												? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
												: "placeholder:text-custom-placeholder ring-custom-ring text-black"
										}`}
										{...register("email")}
										// {...register("email", {
										// 	required: "Email Address is required",
										// 	pattern: {
										// 		value:
										// 			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
										// 		message: "Invalid email address",
										// 	},
										// })}
									/>
									{errors.email && (
										<p className='text-red-500 text-sm mt-2'>
											{errors.email.message}
										</p>
									)}
								</div>
								<button
									type='submit'
									className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 text-white hover:bg-custom-indigo mt-16 lg:mt-14 focus-visible:outline ${
										prefersDarkMode
											? "bg-custom-dark-indigo"
											: "bg-custom-indigo"
									}`}>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
