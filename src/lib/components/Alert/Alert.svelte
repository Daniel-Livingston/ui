<script lang="ts">
	import './Alert.css';
	import type { AlertProps } from './types';
	import { Button } from '$lib/components/Button';
	import classNames from 'classnames';

	let { dismissible, onDismiss, variant, class: classname, ...props } = $props<AlertProps>();

	let dismissed = $state(false);
</script>

<div class={classNames('alert', classname)} class:dismissed {...props}>
	<slot />

	{#if dismissible}
		<Button
			{variant}
			onclick={() => {
				dismissed = true;
				onDismiss && onDismiss();
			}}
			close
		/>
	{/if}
</div>
