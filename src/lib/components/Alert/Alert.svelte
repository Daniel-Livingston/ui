<script lang="ts">
	import './Alert.css';
	import type { AlertProps } from './types';
	import { Button } from '$lib/components/Button';
	import classNames from 'classnames';

	let {
		dismissible,
		icon: Icon,
		onDismiss,
		variant,
		class: classname,
		...props
	} = $props<AlertProps>();

	let dismissed = $state(false);
</script>

<div
	class={classNames('alert', `alert-${variant}`, classname)}
	class:dismissed
	{...props}
	role="alert"
>
	{#if Icon}
		<div class="alert-icon-wrapper">
			<Icon class="alert-icon" />
			<slot />
		</div>
	{:else}
		<slot />
	{/if}

	{#if dismissible}
		<Button
			onclick={() => {
				dismissed = true;
				onDismiss && onDismiss();
			}}
			close
		/>
	{/if}
</div>
