import TopBar from "@/components/top-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { ArrowRightIcon, LayoutGrid } from "lucide-react";
import Image from "next/image";

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

export default async function PortalPage() {
  const data = await prisma.funHubCategory.findMany();
  const app = await prisma.funHubApplication.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log(app);

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
          {data.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="flex-shrink-0"
            >
              <Image
                className="dark:invert"
                alt={category.name}
                src={category.imageUrl || ""}
                width={16}
                height={16}
              />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      {/* Sample Content Sections */}
      <div>
        <div>
          <p className="px-6 text-2xl font-bold mb-4">Applications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6 pb-6 pt-2">
          {app.map((application, i) => (
            <Card key={i} className="min-h-[200px] group relative">
              <div className="p-4 flex flex-row items-start gap-4 justify-between">
                <div className="h-12 w-12 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <LayoutGrid className={`h-10 w-10 ${getRandomColor(i)}`} />
                </div>
                <Badge variant="secondary" className="mt-1">
                  {application.category.name}
                </Badge>
              </div>
              <CardHeader className="mt-[-20px] px-4">
                <CardDescription>
                  <h2 className="text-lg font-semibold mb-2">
                    {application.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {application.description}
                  </p>
                </CardDescription>
              </CardHeader>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" size="icon" aria-label="Open">
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </div>
              <CardFooter className="mt-[-20px] px-4 flex justify-between items-center">
                <Badge
                  variant="outline"
                  className="text-xs text-muted-foreground"
                >
                  #{application.status}
                </Badge>
              </CardFooter>
            </Card>
          ))}
          {/* {Array.from({ length: 50 }).map((_, i) => (
            <Card key={i} className="min-h-[200px] group relative">
              <div className="p-4 flex flex-row items-start gap-4 justify-between">
                <div className="h-12 w-12 rounded-lg border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <LayoutGrid className={`h-10 w-10 ${getRandomColor(i)}`} />
                </div>
                <Badge variant="secondary" className="mt-1">
                  CAT {i + 1}
                </Badge>
              </div>
              <CardHeader className="mt-[-20px] px-4">
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
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" size="icon" aria-label="Open">
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </div>
              <CardFooter className="mt-[-20px] px-4 flex justify-between items-center">
                <Badge
                  variant="outline"
                  className="text-xs text-muted-foreground"
                >
                  #Free
                </Badge>
              </CardFooter>
            </Card>
          ))} */}
        </div>
      </div>
      {/* Bottom spacing */}
      <div className="h-20" />
    </>
  );
}
