"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function ChangeProfileButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Updating..." : "Change Profile"}
    </Button>
  );
}
