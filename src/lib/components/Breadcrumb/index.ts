import Breadcrumb from './Breadcrumb.svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';

const BreadcrumbContainer = Object.assign(Breadcrumb, { Item: BreadcrumbItem });

export { BreadcrumbContainer as Breadcrumb };
