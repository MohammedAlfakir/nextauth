import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/nextAuth";
import SignOut from "@/Components/SignOut";
import Image from "next/image";

async function Profile() {
  const session = await getServerSession(authOptions); // Hadi Bach Kandir Fetch ldata l f authOptions

  return (
    <>
      <div>
        {/* Ila kan Session True Ya3nin dayer Login Bayen li Name o Image o Email */}
        {session && (
          <div className="flex flex-col content-center justify-center h-screen items-center">
            <h1>Welcome {session?.user?.name}</h1>
            <Image
              src={session.user?.image as string}
              width={100}
              height={100}
              alt="User Image"
              className="flex items-center rounded-full m-10"
            />
            <p>Email:{session.user?.email}</p>
            <SignOut />
            {/* Hadi Signout Components Fin dayer Button li katdir Signout */}
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
