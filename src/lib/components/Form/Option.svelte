<script lang="ts">
	import classNames from 'classnames';

	import type { OptionProps } from './types';

	let { class: classname, ...props } = $props<OptionProps>();
</script>

<option class={classNames('form__option', classname)} {...props}><slot /></option>
