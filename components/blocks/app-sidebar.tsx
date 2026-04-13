import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { PlusCircle, UserIcon } from 'lucide-react';
import { DynamicSidebarMenuitem } from '../ui/dynamic-sidebar-menu-item';
import { DynamicSidebarHeader } from '../ui/dynamic-sidebar-header';

const navItems = [
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
  { label: 'Manage', href: 'href' },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <DynamicSidebarHeader
        text="Deploy Portal"
        icon={<UserIcon width={28} height={28} />}
      />
      <SidebarContent>
        <SidebarMenu className="data-closed:w-[100px]">
          {navItems.map(navItem => (
            <SidebarMenuItem key={navItem.label}>
              <SidebarMenuButton render={<DynamicSidebarMenuitem href={navItem.href} text={navItem.label} icon={<PlusCircle width={28} height={28} />} />} />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
