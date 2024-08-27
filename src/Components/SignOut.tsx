"use client";

import { signOut } from "next-auth/react";

function SignOut() {
  return (
    <>
      <button
        type="button"
        className="bg-black text-white px-12 py-4 rounded-lg mt-10 text-xl"
        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        // Hna Dayer Onclick ykhrej o dayer redirect true o kaydik l sign in page
      >
        Sign Out
      </button>
    </>
  );
}

export default SignOut;
