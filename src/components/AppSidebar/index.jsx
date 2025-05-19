import { ShoppingBag, Store } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Sales report",
    url: "/",
    icon: ShoppingBag
  },
  {
    title: "Inventory report",
    url: "/inventory",
    icon: Store
  }
]

function AppSidebar() {
  const location = useLocation();
  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-center pb-4">
          <span className="text-2xl font-bold">Data Warehouse</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {
                  menuItems.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={location.pathname === item.url}
                        className="py-5"
                      >
                        <Link to={item.url}>
                          <item.icon className="!w-6 !h-6 shrink-0" />
                          <span className="text-base font-base">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                }
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default AppSidebar;
