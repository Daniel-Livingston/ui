<script lang="ts">
	import { enhance } from '$app/forms';
	import classNames from 'classnames';

	import type { FormProps } from './types';

	let { submitFunction, class: classname, ...props } = $props<FormProps>();
</script>

<form class={classNames('form', classname)} use:enhance={submitFunction} {...props}>
	<slot />
</form>

<style>
	:global(:root) {
		--form_gap: 1.25rem;

		--form-checkbox-font-weight: 400;
		--form-checkbox-gap: 0.5rem;

		--form-radio-font-weight: 400;

		--form-range-gap: 0.5rem;
		--form-range-font-size: var(--body-font-size);
	}
</style>
