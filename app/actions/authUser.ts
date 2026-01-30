"use server";
import { auth } from "@/lib/auth";
import { log } from "console";
import { redirect } from "next/navigation";

export async function signUpAction(formdata: FormData) {
  console.log(formdata);

  const name = formdata.get("name") as string;

  console.log(formdata);
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
