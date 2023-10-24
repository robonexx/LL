export type SideNavItem = {
    title: string;
    path: string;
    icon?: string; 
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
}
  
export type DanceStep = {
  name: string;
  desc: string;
  creator?: string;
  id: string;
}