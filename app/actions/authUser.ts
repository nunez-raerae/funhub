"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUpAction(formdata: FormData) {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  redirect("/login");
}

export async function loginAction(formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    redirect("/login?error=Invalid credentials");
  }
  redirect("/portal");
}

export async function changePasswordAction(formdata: FormData) {
  const currentPassword = String(formdata.get("current-password") || "");
  const newPassword = String(formdata.get("new-password") || "");

  if (!currentPassword || !newPassword) {
    redirect(
      `/password-reset?error=${encodeURIComponent("Missing password fields")}`,
    );
  }

  if (newPassword.length < 8) {
    redirect(
      `/password-reset?error=${encodeURIComponent(
        "New password must be at least 8 characters",
      )}`,
    );
  }

  try {
    await auth.api.changePassword({
      headers: await headers(),
      body: {
        currentPassword,
        newPassword,
      },
    });
  } catch (error) {
    redirect(
      `/password-reset?error=${encodeURIComponent(
        "Unable to change password",
      )}`,
    );
  }

  redirect("/portal");
}
