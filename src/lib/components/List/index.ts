import List from './List.svelte';
import ListItem from './ListItem.svelte';

const ListContainer = Object.assign(List, { Item: ListItem });

export { ListContainer as List };
