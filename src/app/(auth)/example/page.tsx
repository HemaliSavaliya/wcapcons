/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-full flex-1 h-screen overflow-hidden">
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 w-full object-cover"
          src="/images/section3.png"
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none mr-2 lg:px-20 xl:px-24 overflow-auto h-screen">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-9 lg:h-[75px] md:h-[75px] w-48 lg:w-[335px] md:w-[335px] mt-12"
              src="/images/light-mode-logo.png"
              alt="Your Company"
            />
            <h2 className="mt-14 text-base lg:text-3xl md:text-3xl leading-9 font-normal text-custom-ring">
              Sign in to your account
            </h2>
            <p className="mt-0 lg:mt-2 text-xs lg:text-xl leading-6 text-custom-ring">
              Not a member?{' '}
              <a href="#" className="text-custom-indigo hover:text-custom-indigo">
                Start a 14 day free trial
              </a>
            </p>
          </div>
          <div className="mt-11">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <div className="mt-2">
                    <input
                      id='name'
                      type='text'
                      placeholder='Name'
                      className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset text-sm lg:text-xl sm:leading-6 px-4 py-4 outline-0 placeholder:text-custom-placeholder ring-custom-ring text-black`}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id='password'
                      type='password'
                      placeholder='Password'
                      className={`block w-full rounded-md lg:rounded-xl border-0 shadow-sm ring-[0.5px] ring-inset text-sm lg:text-xl sm:leading-6 px-4 py-4 outline-0 placeholder:text-custom-placeholder ring-custom-ring text-black`}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className={`flex w-full h-10 lg:h-12 md:h-12 justify-center items-center rounded-lg lg:rounded-xl px-3 py-1.5 text-sm lg:text-xl font-light leading-6 text-white hover:bg-custom-indigo focus-visible:outline bg-custom-indigo`}>
                    Sign In
                  </button>
                </div>
                <p className="mt-2 text-xs lg:text-xl leading-6 text-custom-ring">
                  Already have an account?{' '}
                  <a href="#" className="text-custom-indigo hover:text-custom-indigo">
                    Login here
                  </a>
                </p>
              </form>
            </div>
            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm lg:text-xl font-medium leading-6">
                  <span className="bg-white px-6 text-custom-placeholder">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm lg:text-xl font-semibold text-custom-placeholder shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <img src="/images/google.png" alt="google" className="h-5 w-5" />
                  <span className="text-sm font-semibold leading-6">Google</span>
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm lg:text-xl font-semibold text-custom-placeholder shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <img src="/images/apple.png" alt="google" className="h-5 w-5" />
                  <span className="text-sm font-semibold leading-6">GitHub</span>
                </a>
              </div>

              <div className="flex justify-center text-xs lg:text-xl font-medium leading-6 pt-11 cursor-pointer pb-12">
                <span className="px-6 underline lg:no-underline text-custom-placeholder">Terms and Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page