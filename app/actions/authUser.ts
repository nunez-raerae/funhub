"use server";
import { auth } from "@/lib/auth";
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

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  redirect("/");
}
