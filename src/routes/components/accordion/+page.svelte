<script lang="ts">
	import { Accordion, CodeSnippet, Demo, Heading, Text } from '$lib';
	import example1 from './examples/usage-1.html?raw';
	import 'highlight.js/styles/default.css';
</script>

<Text size="xl">
	Accordions can be used to optionally reveal or hide sections of content. This is typically done
	through user interaction.
</Text>

<Heading level={2}>Overview</Heading>

<Text>
	An accordion is a collection of collapsible panels. Each panel consists of a header and a body.
	The header is used to identify the panel and can be clicked to toggle the visibility of the body.
</Text>

<Heading level={2}>Usage</Heading>

<Text>Click the accordion headings below to expand/collapse the accordion content.</Text>

<Demo>
	<Accordion>
		<Accordion.Item id="accordion-item-1" label="Fusce aliquam laoreet enim sed tristique?" open>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam diam tellus, id
			ornare ligula dapibus ut. Nulla dui orci, dapibus a nisi sed, elementum bibendum enim. Donec
			lobortis bibendum lobortis. Vivamus aliquet eleifend massa quis vulputate. Ut lectus sapien,
			pretium vel diam vitae, tincidunt hendrerit augue. Etiam pretium dui dignissim risus dapibus,
			et malesuada nisl dapibus. Fusce vulputate erat et tellus sagittis, eu laoreet tortor rutrum.
			Aliquam quis leo lectus.
		</Accordion.Item>
		<Accordion.Item id="accordion-item-2" label="Nullam lorem metus, mollis ut ornare?">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam diam tellus, id
			ornare ligula dapibus ut. Nulla dui orci, dapibus a nisi sed, elementum bibendum enim. Donec
			lobortis bibendum lobortis. Vivamus aliquet eleifend massa quis vulputate. Ut lectus sapien,
			pretium vel diam vitae, tincidunt hendrerit augue. Etiam pretium dui dignissim risus dapibus,
			et malesuada nisl dapibus. Fusce vulputate erat et tellus sagittis, eu laoreet tortor rutrum.
			Aliquam quis leo lectus.
		</Accordion.Item>
		<Accordion.Item id="accordion-item-3" label="Pellentesque et cursus?">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam diam tellus, id
			ornare ligula dapibus ut. Nulla dui orci, dapibus a nisi sed, elementum bibendum enim. Donec
			lobortis bibendum lobortis. Vivamus aliquet eleifend massa quis vulputate. Ut lectus sapien,
			pretium vel diam vitae, tincidunt hendrerit augue. Etiam pretium dui dignissim risus dapibus,
			et malesuada nisl dapibus. Fusce vulputate erat et tellus sagittis, eu laoreet tortor rutrum.
			Aliquam quis leo lectus.
		</Accordion.Item>
	</Accordion>
</Demo>

<CodeSnippet code={example1} lang="html" highlighted />
