import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarWrapper from './SidebarWrapper';

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col justify-end">
      <SidebarWrapper>
        <SidebarHeader />
        <SidebarMenu />
      </SidebarWrapper>
    </div>
  );
}
