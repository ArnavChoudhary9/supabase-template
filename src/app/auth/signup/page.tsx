import { SignupForm } from "@/components/signup-form"
import signup from "./actions"
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Suspense fallback={<div>Loading...</div>}>
          <SignupForm handleSignup={signup} />
        </Suspense>
      </div>
    </div>
  )
}
