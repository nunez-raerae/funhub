import { changeProfileAction } from "@/app/actions/authUser";
import { ChangeProfileButton } from "./change-profile-button";

export default function ProfileForm() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <h1 className="text-2xl font-bold">Profile Page</h1>
        <p>
          This is the profile page. You can view and edit your profile
          information here.
        </p>
        <form action={changeProfileAction}>
          <ChangeProfileButton />
        </form>
      </div>
    </>
  );
}
