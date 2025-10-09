import { useState } from "react";

export default function Example() {
  const [theme, setTheme] = useState("Dark");
  const handleTheme=()=>{(setTheme(theme === "Light" ? "Dark" : "Light"))}

  return (
    <>
      <div className={`flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 
      ${theme === "Light" ? 'bg-black' : ""}`}>
        <div className="flex justify-end items-center pt-0 m-0">
                  <button 
                  onClick={handleTheme}>{theme}</button>

        </div>{" "}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold text-indigo-500">
            Register
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="John"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline-none placeholder:text-gray-500 focus:outline-2 border border-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="ex@gmail.com"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline-none placeholder:text-gray-500 focus:outline-2 border border-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-500"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="........"
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline-none placeholder:text-gray-500 placeholder:text-4xl focus:outline-2 border border-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-500"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="re-type password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-500 outline-none placeholder:text-gray-500 focus:outline-2 border border-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Existing User ?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
