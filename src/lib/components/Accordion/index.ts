import Accordion from './Accordion.svelte';
import AccordionItem from './AccordionItem.svelte';

const AccordionContainer = Object.assign(Accordion, { Item: AccordionItem });

export { AccordionContainer as Accordion };
