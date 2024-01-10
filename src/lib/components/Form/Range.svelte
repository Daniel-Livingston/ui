<script lang="ts">
	import classNames from 'classnames';

	import Field from './Field.svelte';
	import type { RangeProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		max,
		min,
		required,
		step,
		value,
		...props
	} = $props<RangeProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<div class="form__range-wrapper">
		<span class="form__range-min">{min}</span>
		<input
			type="range"
			class="form__range form__input"
			bind:value
			{id}
			{max}
			{min}
			{step}
			{...props}
		/>
		<span class="form__range-max">{max}</span>
	</div>
</Field>

<style>
	.form__range-wrapper {
		align-items: center;
		display: flex;
		gap: var(--form-range-gap);
		margin-top: var(--form-label-spacing);
	}

	.form__input.form__range {
		margin: 0;
		padding: 0;
		position: relative;
	}

	.form__range-min,
	.form__range-max {
		font-size: var(--form-range-font-size);
	}
</style>
