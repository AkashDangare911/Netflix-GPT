import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm } from "../Utils/validateSignInForm";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate EMAIL & PASSWORD
    const userNameValue = userName.current?.value || null;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const errorMessage = validateSignInForm(
      userNameValue,
      emailValue,
      passwordValue,
      isSignInForm,
    );
    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (!isSignInForm) {
      // Sign Up Flow
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          console.error("Error signing up:", errorCode, errorMessage);
        });
    } else {
      // Sign In Flow
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          console.error("Error signing in:", errorCode, errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <form
        className="w-3/12 p-12 bg-black opacity-90 text-white flex flex-col gap-6 mt-20 mx-auto rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Name"
            className="border-amber-100 p-3 my-2 bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="border-amber-100 p-3 my-2 bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border-amber-100 p-3 bg-gray-700 rounded-sm"
        />

        {errorMessage && (
          <p className="text-red-500 font-semibold">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="p-4 bg-red-700 font-bold rounded-sm"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-300">
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <button
            className="underline cursor-pointer "
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
