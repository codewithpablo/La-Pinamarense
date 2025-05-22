import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Settings, User } from "lucide-react";

const tabs = [
  {
    name: "Billeteras",
    value: "home",
    icon: Home,
  },
  {
    name: "Ventas",
    value: "profile",
    icon: User,
  },
 
  {
    name: "Settings",
    value: "settings",
    icon: Settings,
  },
];

export default function VerticalLeftBorderedTabsDemo() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue={tabs[0].value}
      className="max-w-md w-full flex items-start gap-4 mt-5  justify-center"
    >
      <TabsList className="flex shrink-0 lg:grid lg:grid-cols-1 min-w-28 p-0 mx-auto bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="border-l-2 border-transparent lg:justify-start rounded-full data-[state=active]:shadow-none size-[50px] flex justify-center items-center  data-[state=active]:bg-green-900 data-[state=active]:text-white py-1.5 lg:w-[150px]"
          >
            <tab.icon className="h-5 w-5 m-2" /> <span className="hidden lg.flex">{tab.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
    </Tabs>
  );
}
