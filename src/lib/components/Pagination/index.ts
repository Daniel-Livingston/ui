import Pagination from './Pagination.svelte';
import PaginationItem from './PaginationItem.svelte';

const PaginationContainer = Object.assign(Pagination, { Item: PaginationItem });

export { PaginationContainer as Pagination };
