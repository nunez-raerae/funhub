"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { makeIdenticonDataUrl } from "@/lib/profile-gen";

export default function ProfileForm() {
  const handleChangeProfile = async () => {
    try {
      await authClient.updateUser({
        image: makeIdenticonDataUrl(String(Date.now())),
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <h1 className="text-2xl font-bold">Profile Page</h1>
        <p>
          This is the profile page. You can view and edit your profile
          information here.
        </p>
        <Button onClick={handleChangeProfile}>Change Profile</Button>
      </div>
    </>
  );
}
