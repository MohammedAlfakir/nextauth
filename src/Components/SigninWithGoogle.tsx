"use client";

import { signIn } from "next-auth/react";

function SigninWithGoogle() {
  return (
    <>
      <button
        type="button"
        className="bg-black text-white px-12 py-4 rounded-lg mt-10 text-xl"
        onClick={() =>
          signIn("google", { redirect: true, callbackUrl: "/profile" })
        }
        // Hna Dayer onclick y 3tik dir login o moraha rediract l Home
      >
        Sign in With Google
      </button>
    </>
  );
}

export default SigninWithGoogle;
