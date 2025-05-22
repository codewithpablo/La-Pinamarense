import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    name: "Mercado Pago",
    value: "Mercado Pago",
  },
  {
    name: "NBCH24",
    value: "NBCH24",
  },
  {
    name: "Tuya",
    value: "Tuya",
  },

];

export default function PaymentTabs() {
  return (
    <Tabs defaultValue={tabs[0].value} className="max-w-xs w-full">
      <TabsList className="p-0 h-auto bg-background gap-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-green-900  data-[state=active]:text-primary-foreground"
          > 
            <code className="text-[13px]">{tab.name}</code>
          </TabsTrigger>
        ))}
      </TabsList>

    </Tabs>
  );
}
