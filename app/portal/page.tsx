import TopBar from "@/components/top-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BatteryFullIcon,
  BrickWallShieldIcon,
  CableIcon,
  CircleFadingArrowUpIcon,
  Code2,
  LayoutGrid,
  LayoutListIcon,
} from "lucide-react";

const iconColors = [
  "text-slate-600 dark:text-slate-400",
  "text-gray-600 dark:text-gray-400",
  "text-zinc-600 dark:text-zinc-400",
  "text-neutral-600 dark:text-neutral-400",
  "text-stone-600 dark:text-stone-400",
  "text-blue-600 dark:text-blue-400",
  "text-indigo-600 dark:text-indigo-400",
  "text-violet-600 dark:text-violet-400",
];
const getRandomColor = (index: number) => {
  return iconColors[index % iconColors.length];
};

export default function PortalPage() {
  return (
    <>
      <TopBar />

      <div className="p-6">
        <h2 className="text-3xl font-bold ">Recommended for you</h2>
        <p>Based on your recent activity.</p>
      </div>

      <div>
        {/* Horizontal scrollable section */}
        <div className="flex space-x-4 overflow-x-auto px-6 pb-6 pt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            // Card Component */}
            <Card
              key={i}
              className="w-[calc(20%-0.8rem)] min-w-[300px] min-h-[100px] flex-shrink-0 hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              <div className="p-4 flex flex-row items-start gap-4 justify-between">
                <div className="h-15 w-15 rounded-lg border flex items-center justify-center">
                  <LayoutGrid className="h-10 w-10" />
                </div>
                <Badge variant={"secondary"} className="mt-2">
                  CATEGORY {i + 1}
                </Badge>
              </div>
              <CardHeader>
                <CardDescription>
                  <h2 className="text-lg font-semibold mb-2">
                    Item Title {i + 1}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    This is a brief description of item {i + 1}. It provides an
                    overview of the content.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="sticky top-16 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex space-x-4 overflow-x-auto px-6 py-4 scrollbar-hide">
          <Button variant="outline" className="flex-shrink-0">
            <LayoutGrid className="mr-2 h-4 w-4" /> All Applications
          </Button>
          <Button variant="outline" className="flex-shrink-0">
            <BatteryFullIcon className="mr-2 h-4 w-4" /> Productivity
          </Button>
          <Button variant="outline" className="flex-shrink-0">
            <Code2 className="mr-2 h-4 w-4" /> Development
          </Button>
          <Button variant="outline" className="flex-shrink-0">
            <BrickWallShieldIcon className="mr-2 h-4 w-4" /> Security
          </Button>
          <Button variant="outline" className="flex-shrink-0">
            <CableIcon className="mr-2 h-4 w-4" /> API Tools
          </Button>
        </div>
      </div>
      {/* Sample Content Sections */}
      <div>
        <div>
          <p className="px-6 text-2xl font-bold mb-4">Applications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6 pb-6 pt-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <Card
              key={i}
              className="min-h-[200px] transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              <div className="p-4 flex flex-row items-start gap-4 justify-between">
                <div className="h-12 w-12 rounded-lg border flex items-center justify-center flex-shrink-0">
                  <LayoutGrid className={`h-10 w-10 ${getRandomColor(i)}`} />
                </div>
                <Badge variant="secondary" className="mt-1">
                  CAT {i + 1}
                </Badge>
              </div>
              <CardHeader>
                <CardDescription>
                  <h2 className="text-lg font-semibold mb-2">
                    Item Title {i + 1}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    This is a brief description of item {i + 1}. It provides an
                    overview of the content.
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      {/* Bottom spacing */}
      <div className="h-20" />
    </>
  );
}
