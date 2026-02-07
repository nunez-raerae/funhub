"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { LayoutGrid, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./theme-switch";
import { Field } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { getUserInitials, UserProfile } from "./user-profile";
import { User } from "better-auth";
import Link from "next/link";

interface TopBarProps {
  user: User;
}

export default function TopBar({ user }: { user: TopBarProps["user"] }) {
  const handleLogout = async () => {
    await authClient.signOut();
    redirect("/login");
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6 justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg border flex items-center justify-center">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold">FunHub</h1>
          </div>
        </div>
        <div className="max-w-sm flex-2 flex items-center">
          <Field className="w-full">
            <InputGroup>
              <InputGroupInput
                id="input-group-url"
                placeholder="Search FunHub"
                className="h-9"
              />

              <InputGroupAddon className="h-9">
                <Search className="h-4 w-4 text-primary" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src={user.image || ""}
                    alt={user.name || "User"}
                  />
                  <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-50 bg-popover" align="center">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <UserProfile user={user} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/portal/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
