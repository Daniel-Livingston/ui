import SideNav from './SideNav.svelte';
import SideNavLink from './SideNavLink.svelte';
import SideNavMenu from './SideNavMenu.svelte';
import SideNavSeparator from './SideNavSeparator.svelte';

const SideNavContainer = Object.assign(SideNav, {
	Link: SideNavLink,
	Menu: SideNavMenu,
	Separator: SideNavSeparator
});

export { SideNavContainer as SideNav };
