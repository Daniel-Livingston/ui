import SideNav from './SideNav.svelte';
import SideNavLink from './SideNavLink.svelte';
import SideNavMenu from './SideNavMenu.svelte';

const SideNavContainer = Object.assign(SideNav, { Link: SideNavLink, Menu: SideNavMenu });

export { SideNavContainer as SideNav };
