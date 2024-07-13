"use client";
import { Unauthenticated, Authenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
export default function TopNav() {
  const { isLoading } = useConvexAuth();
  return (
    <nav className="flex w-full select-none justify-between bg-black p-3 text-lg font-semibold uppercase text-white blur-[0.4px]">
      <h2 className="cursor-pointer">T3Gallery</h2>
      <div className="">
        {isLoading && (
          <>
            <Loader className="h-5 w-5 animate-spin" />
          </>
        )}
        {!isLoading && (
          <>
            <Unauthenticated>
              <SignInButton mode="modal" />
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
          </>
        )}
      </div>
    </nav>
  );
}
