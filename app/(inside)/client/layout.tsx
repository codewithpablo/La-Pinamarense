import ClientSidebar from "@/components/mine/sidebar/ClientSidebar"
import Logo from "@/components/mine/logos/Logo"


export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div className="flex">
                    <div className="hidden lg:flex lg:flex-col w-[300px]  h-[100dvh] p-10 sticky top-0 left-0">
                        <div className="text-center">
                            <Logo />
                        </div>
                        <ClientSidebar/>
                    </div>
                    <div className="flex-1  p-4">
                        {children}
                    </div>
                </div>
  )
}