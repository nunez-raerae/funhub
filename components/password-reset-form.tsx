import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { changePasswordAction } from "@/app/actions/authUser";
import { PasswordResetSubmitButton } from "./submit-button";

export function PasswordResetForm({ params }: { params?: { error?: string } }) {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardContent>
          <form action={changePasswordAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="current-password">
                  Current password
                </FieldLabel>
                <Input
                  id="current-password"
                  type="password"
                  name="current-password"
                  placeholder="Current password"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="new-password">New password</FieldLabel>
                  {/* <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input
                  id="new-password"
                  name="new-password"
                  type="password"
                  placeholder="New password"
                  required
                />
              </Field>
              {params?.error ? (
                <FieldError className="text-center">{params.error}</FieldError>
              ) : null}
              <Field>
                <PasswordResetSubmitButton />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and{" "}
          <a href="/signup">Privacy Policy</a>.
        </FieldDescription>
      </Card>
    </div>
  );
}
