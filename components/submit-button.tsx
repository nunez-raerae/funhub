"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function PasswordResetSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      aria-busy={pending}
    >
      {pending ? "Resetting..." : "Reset Password"}
    </Button>
  );
}
