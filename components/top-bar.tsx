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
import {
  InfoIcon,
  LayoutGrid,
  LogOut,
  Search,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./theme-switch";
import { Field, FieldLabel } from "./ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";

export default function TopBar() {
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
                    src="https://github.com/shadcn.png"
                    alt="shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-50 bg-popover" align="center">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                  <div className="flex flex-row gap-2 items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                      <span className="font-medium">shadcn</span>
                      <span className="text-xs text-muted-foreground">
                        shadcn@example.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
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
