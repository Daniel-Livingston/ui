<script lang="ts">
	import { CodeSnippet, Text } from '$lib';
	import 'highlight.js/styles/default.css';
</script>

<Text>
	Content within each <CodeSnippet code="<a>" inline /> should indicate the link's destination. If the
	href attribute is present, pressing the enter key while focused on the
	<CodeSnippet code="<a>" inline /> element will activate it.
</Text>
