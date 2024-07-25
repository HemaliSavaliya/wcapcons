/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import useDarkMode from "@/app/utils/useDarkMode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SectionImage from "../commonImage/SectionImage";

interface FormData {
	otp: string[];
}

const OTP: React.FC = () => {
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const {
		handleSubmit,
		control,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm<FormData>({
		defaultValues: {
			otp: ["", "", "", "", "", ""],
		},
	});
	const prefersDarkMode = useDarkMode();
	const router = useRouter();

	const onSubmit = (data: FormData) => {
		const otp = data.otp.join("");
		console.log(otp); // Handle the OTP verification logic

		router.push("/user/create");
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const { value } = e.target;
		if (value.length === 1 && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
		if (value.length === 0 && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
		clearErrors("otp"); // Clear the error when user starts typing
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
			inputRefs.current[index - 1]?.focus();
		}
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
							className={`mt-14 text-base lg:text-[26px] md:text-[26px] leading-9 tracking-tight text-custom-ring ${
								prefersDarkMode ? "text-white" : "text-custom-ring"
							}`}>
							OTP Verification
						</h2>
						<p className='lg:mt-2 text-xs lg:text-base md:text-base text-gray-400 lg:text-custom-indigo hover:text-custom-indigo'>
							Enter your 6 digit code sent to ********82
						</p>
						<p className='mt-2 text-sm underline text-custom-indigo hover:text-custom-indigo'>
							Edit your number
						</p>
					</div>

					<div className='mt-11'>
						<div>
							<form
								autoComplete='off'
								onSubmit={handleSubmit((data) => {
									const isComplete = data.otp.every(
										(digit: string) => digit.length === 1,
									);
									if (!isComplete) {
										setError("otp", {
											type: "manual",
											message: "All fields must be filled with one digit",
										});
									} else {
										onSubmit(data);
									}
								})}>
								<div className='space-x-3 lg:space-x-2'>
									{[...Array(6)].map((_, index) => (
										<Controller
											key={index}
											name={`otp.${index}`}
											control={control}
											render={({ field }) => (
												<input
													{...field}
													type='text'
													maxLength={1}
													placeholder='0'
													className={`w-9 h-12 lg:w-12 lg:h-14 rounded-md border-0 shadow-sm ring-[0.5px] ring-inset sm:text-2xl sm:leading-6 outline-0 text-center ${
														prefersDarkMode
															? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
															: "placeholder:text-custom-placeholder ring-custom-ring text-custom-dark-bg"
													}`}
													onChange={(e) => {
														field.onChange(e);
														handleInputChange(e, index);
													}}
													onKeyDown={(e) => handleKeyDown(e, index)}
													ref={(el) => {
														field.ref(el);
														inputRefs.current[index] = el;
													}}
												/>
											)}
										/>
									))}
								</div>
								{errors.otp?.message && (
									<p className='text-red-500 text-sm mt-2'>
										{typeof errors.otp.message === "string" &&
											errors.otp.message}
									</p>
								)}
								<p className='mt-4 text-xs lg:text-base md:text-base leading-6 text-gray-400'>
									Didn't get a code?{" "}
									<Link
										href='#'
										className='text-custom-indigo underline hover:text-custom-indigo'>
										Resend
									</Link>
								</p>
								<button
									type='submit'
									className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-xl px-3 py-1.5 text-sm lg:text-xl md:text-xl font-light leading-6 mt-9 lg:mt-16 text-white hover:bg-custom-indigo focus-visible:outline ${
										prefersDarkMode
											? "bg-custom-dark-indigo"
											: "bg-custom-indigo"
									}`}>
									Verify
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTP;
