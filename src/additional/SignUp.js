import React from "react";

const SignUp = () => {


  return (
    <div>
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-green-50 bg-slate-600">
        <div>
            <a href="/">
                <h3 className="text-4xl font-bold text-white">
                    SignUp
                </h3>
            </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-green-700 undefined"
                    >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="name"
                            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-green-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="email"
                            name="email"
                            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-green-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password"
                            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-green-700 undefined"
                    >
                        Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password_confirmation"
                            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <a
                        className="text-sm text-green-600 underline hover:text-green-900"
                        href="#"
                    >
                        Already registered?
                    </a>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-900 border border-transparent rounded-md active:bg-green-900 false"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  );
};

export default SignUp;