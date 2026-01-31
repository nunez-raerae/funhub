"use client";
import {
  Code,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Bug,
  Package,
  Server,
  Wrench,
  FileCode,
  User,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  UserCircle,
  UserCog,
  Calendar,
  Clock,
  CheckSquare,
  ClipboardList,
  FileText,
  Edit,
  Activity,
  Zap,
  Home,
  Search,
  Settings,
  Bell,
  Star,
  Mail,
  Trash,
  Plus,
  Minus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Pages() {
  const ICON_GROUPS = {
    development: {
      code: Code,
      terminal: Terminal,
      cpu: Cpu,
      database: Database,
      gitBranch: GitBranch,
      bug: Bug,
      package: Package,
      server: Server,
      tools: Wrench,
      fileCode: FileCode,
    },
    people: {
      user: User,
      users: Users,
      userPlus: UserPlus,
      userMinus: UserMinus,
      userCheck: UserCheck,
      userX: UserX,
      userCircle: UserCircle,
      userCog: UserCog,
    },
    productivity: {
      calendar: Calendar,
      clock: Clock,
      checkSquare: CheckSquare,
      clipboard: ClipboardList,
      fileText: FileText,
      edit: Edit,
      activity: Activity,
      zap: Zap,
    },
    general: {
      home: Home,
      search: Search,
      settings: Settings,
      bell: Bell,
      star: Star,
      mail: Mail,
      trash: Trash,
      plus: Plus,
      minus: Minus,
    },
  };

  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const filteredIcons =
    selectedGroup === "all"
      ? Object.entries(ICON_GROUPS).flatMap(([groupName, icons]) =>
          Object.entries(icons).map(([iconName, IconComponent]) => ({
            groupName,
            iconName,
            IconComponent,
          })),
        )
      : Object.entries(
          ICON_GROUPS[selectedGroup as keyof typeof ICON_GROUPS],
        ).map(([iconName, IconComponent]) => ({
          groupName: selectedGroup,
          iconName,
          IconComponent,
        }));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Lucide Icons Gallery</h1>

        <Select value={selectedGroup} onValueChange={setSelectedGroup}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Icons</SelectItem>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="people">People</SelectItem>
            <SelectItem value="productivity">Productivity</SelectItem>
            <SelectItem value="general">General</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {filteredIcons.map(({ groupName, iconName, IconComponent }) => (
          <div
            key={`${groupName}-${iconName}`}
            className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer"
          >
            <IconComponent className="h-8 w-8" />
            <span className="text-xs text-center text-muted-foreground">
              {iconName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
