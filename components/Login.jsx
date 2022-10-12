import React from "react";

import { LogoGoogle, LogoFacebook } from "react-ionicons";

function Login() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-red-900 text-lg">Choose an option to Log in</h2>

      <div className="w-full mt-8 xs:w-4/5 md:w-3/5 lg:w-2/5">
        <div className="flex flex-col space-y-4">
          <button className="px-4 py-2 w-full border-2 border-red-900 rounded-full flex justify-center items-center space-x-3">
            <LogoGoogle />
            <span>Log in with Google</span>
          </button>
          <button className="px-4 py-2 w-full border-2 border-red-900 rounded-full flex justify-center items-center space-x-3">
            <LogoFacebook />
            <span>Log in with Facebook</span>
          </button>
        </div>
        <span className="block my-4 text-center">or</span>

        <form action="#" className="flex flex-col">
          <input
            type="email"
            required
            className="px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="password"
            required
            className="px-4 py-2 mt-4 rounded-md border border-gray-300"
          />
          <span className="block mt-2 text-end text-sm text-red-600">
            I forgot my password
          </span>

          <button
            onClick={(e) => e.preventDefault()}
            className="px-4 py-2 w-full bg-red-900 text-white rounded-full mt-4"
          >
            Enter
          </button>
        </form>
        <p className="block mt-3">
          You don't have an account?{" "}
          <span className="ml-2 border-b border-b-red-600 text-red-600">
            Register &rarr;
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
