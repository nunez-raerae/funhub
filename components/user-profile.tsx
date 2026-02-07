import { User } from "better-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserProfileProps {
  user: User;
}

export const getUserInitials = (user: User) => {
  if (!user.name) return "U";
  return user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user.image || ""} alt={user.name || "User"} />
        <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <span className="font-medium">{user.name}</span>
        <span className="text-xs text-muted-foreground">{user.email}</span>
      </div>
    </div>
  );
}
