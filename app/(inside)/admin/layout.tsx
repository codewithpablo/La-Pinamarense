import AdminSidebar from "@/components/mine/sidebar/AdminSidebar"
import Logo from "@/components/mine/logos/Logo"


export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div className="flex h-[100%]   p-3 lg:p-0 ">
                    <div className="hidden lg:flex  lg:flex-col w-[250px] h-full  sticky top-0 left-0 p-6">
                        <div className="text-center">
                            <Logo />
                        </div>
                        <AdminSidebar/>
                    </div>
                    <div className="lg:flex-1 h-full overflow-hidden  lg:py-3 lg:pr-9 w-full ">
                        {children}
                    </div>
                </div>
  )
}