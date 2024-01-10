<script lang="ts">
	import classNames from 'classnames';

	import type { InputProps } from './types';

	let {
		files,
		id,
		label,
		value,
		type,
		description,
		error,
		required,
		class: classname,
		...props
	} = $props<InputProps>();
</script>

<div class={classNames('form__field', classname)} class:error class:required>
	<label for={id} class="form__label">{label}</label>
	{#if description}
		<p class="form__description">{description}</p>
	{/if}

	{#if type === 'text'}
		<input type="text" class="form__input" bind:value {id} {...props} />
	{:else if type === 'email'}
		<input type="email" class="form__input" bind:value {id} {...props} />
	{:else if type === 'password'}
		<input type="password" class="form__input" bind:value {id} {...props} />
	{:else if type === 'number'}
		<input type="number" class="form__input" bind:value {id} {...props} />
	{:else if type === 'date'}
		<input type="date" class="form__input" bind:value {id} {...props} />
	{:else if type === 'datetime-local'}
		<input type="datetime-local" class="form__input" bind:value {id} {...props} />
	{:else if type === 'file'}
		<input type="file" class="form__input" bind:files {id} {...props} />
	{/if}

	{#if error}
		<p class="form__error">{error}</p>
	{/if}
</div>
