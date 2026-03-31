import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { PlusCircle, UserIcon } from 'lucide-react';

const navItems = [
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center gap-2">
        <UserIcon />
        <p>Deploy Portal</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="data-closed:w-[100px]">
          {navItems.map(navItem => (
            <SidebarMenuItem key={navItem.label}>
              <SidebarMenuButton render={<a href={navItem.href} />}>
                <PlusCircle />
                {navItem.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
