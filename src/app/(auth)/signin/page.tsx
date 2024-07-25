/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {  useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionImage from "../commonImage/SectionImage";
import useDarkMode from "@/app/utils/useDarkMode";

interface FormValues {
	email?: string;
	phoneNumber?: string;
	password: string;
}

const SignIn: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [useEmail, setUseEmail] = useState<boolean>(true);
	const [countryCode, setCountryCode] = useState<string>("+1");
	const router = useRouter();
	const prefersDarkMode = useDarkMode();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue(value);

		if (/^\d+$/.test(value)) {
			setUseEmail(false); // Switch to phone number input
		} else {
			setUseEmail(true); // Switch to email input
		}
	};

	const handleCountryCodeChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setCountryCode(event.target.value);
	};

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
		router.push("/otp");
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
							Welcome back!
						</h2>
						<p className='mt-0 lg:mt-2 text-xs lg:text-xl leading-6 text-custom-indigo hover:text-custom-indigo'>
							Login with your account
						</p>
					</div>
					<div className='mt-11'>
						<div>
							<form
								autoComplete='off'
								onSubmit={handleSubmit(onSubmit)}
								className='space-y-6'>
								<div>
									{useEmail ? (
										<div className='mt-2'>
											<input
												id='email'
												name='email'
												type='email'
												placeholder='Email address'
												className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
													prefersDarkMode
														? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
														: "placeholder:text-custom-placeholder ring-custom-ring text-black"
												}`}
												value={inputValue}
												onChange={handleInputChange}
												// {...register("email", {
												//   required: "Email is required",
												//   pattern: {
												//     value:
												//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
												//     message: "Invalid email address",
												//   },
												// })}
											/>
											{/* {errors.email && (
                            <p className='text-red-500 text-sm mt-2'>
                              {errors.email.message}
                            </p>
                          )} */}
										</div>
									) : (
										<>
											<div className='mt-2 flex space-x-2'>
												<select
													id='country-code'
													name='country-code'
													className={`w-1/3 rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
														prefersDarkMode
															? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
															: "placeholder:text-custom-placeholder ring-custom-ring text-black"
													}`}
													value={countryCode}
													onChange={handleCountryCodeChange}
													// {...register("countryCode", {
													//   required: "Country code is required",
													// })}
												>
													<option value='+91'>+91 (India)</option>
													<option value='+1'>+1 (US)</option>
													<option value='+44'>+44 (UK)</option>
													<option value='+61'>+61 (Australia)</option>
													<option value='+81'>+81 (Japan)</option>
												</select>
												<input
													id='phone-number'
													name='phone-number'
													type='tel'
													placeholder='Phone number'
													className={`w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
														prefersDarkMode
															? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
															: "placeholder:text-custom-placeholder ring-custom-ring text-black"
													}`}
													value={inputValue}
													onChange={handleInputChange}
													// {...register("phoneNumber", {
													//   required: "Phone number is required",
													//   pattern: {
													//     value: /^\d{10,15}$/,
													//     message: "Invalid phone number",
													//   },
													// })}
												/>
											</div>
											{/* {errors.phoneNumber && (
                            <p className='text-red-500 text-sm mt-2'>
                              {errors.phoneNumber.message}
                            </p>
                          )} */}
										</>
									)}
								</div>
								<div>
									<div className='mt-2'>
										<input
											id='password'
											type='password'
											placeholder='Password'
											className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset sm:text-base sm:leading-6 px-4 py-4 outline-0 ${
												prefersDarkMode
													? "bg-custom-dark-bg placeholder:text-custom-dark-placeholder ring-custom-dark-text text-custom-dark-text"
													: "placeholder:text-custom-placeholder ring-custom-ring text-black"
											}`}
											{...register("password", {
												required: "Password is required",
												minLength: {
													value: 6,
													message: "Password must be at least 6 characters",
												},
											})}
										/>
										{errors.password && (
											<span className='text-red-500 text-sm mt-2'>
												{errors.password.message}
											</span>
										)}
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center'>
										<input
											id='remember-me'
											name='remember-me'
											type='checkbox'
											className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
										/>
										<label
											htmlFor='remember-me'
											className={`ml-3 block text-sm lg:text-xl leading-6 ${
												prefersDarkMode
													? "text-custom-dark-text"
													: "text-custom-placeholder"
											}`}>
											Remember Me
										</label>
									</div>
									<div className='text-sm lg:text-xl leading-6'>
										<Link
											href='/passwordforgot'
											className='text-custom-indigo-200 hover:text-custom-indigo-200 hover:underline'>
											Forgot password?
										</Link>
									</div>
								</div>
								<div>
									<button
										type='submit'
										className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline
                    ${
											prefersDarkMode
												? "bg-custom-dark-indigo"
												: "bg-custom-indigo"
										}`}>
										Log In
									</button>
								</div>
								<p
									className={`mt-2 text-xs lg:text-xl leading-6 ${
										prefersDarkMode ? "text-white" : "text-custom-ring"
									}`}>
									Don’t have an account?{" "}
									<Link
										href='/signup'
										className='text-custom-indigo hover:text-custom-indigo underline lg:no-underline'>
										Sign Up here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
