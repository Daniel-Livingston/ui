import type { SubmitFunction } from '@sveltejs/kit';
import type { Snippet } from 'svelte';
import type {
	HTMLFormAttributes,
	HTMLInputAttributes,
	HTMLOptionAttributes,
	HTMLSelectAttributes
} from 'svelte/elements';

export interface DateTimePickerProps extends Omit<InputProps, 'type'> {
	value: string;
}

export interface FormProps extends HTMLFormAttributes {
	method: HTMLFormAttributes['method'];
	submitFunction?: SubmitFunction;
}

export interface InputProps extends HTMLInputAttributes {
	id: string;
	label: string;
	name: string;
	value: number | string | undefined;
	description?: string;
	error?: string;
	files?: FileList;
	type: HTMLInputAttributes['type'];
}

export interface OptionProps extends HTMLOptionAttributes {
	children: Snippet;
}

export interface InternalFieldProps {
	children: Snippet;
	inline?: boolean;
	reverse?: boolean;
}

export interface BaseFieldProps {
	description?: string;
	error?: string;
	id: string;
	label: string;
	required?: boolean;
}

export interface FieldProps extends BaseFieldProps {
	children: Snippet;
	class?: HTMLInputAttributes['class'];
	inline?: boolean;
	reverse?: boolean;
}

export interface CheckboxProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	checked: boolean;
	id: string;
	required?: boolean;
}

export interface DatePickerProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	required?: boolean;
	value: string;
}

export interface EmailInputProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	required?: boolean;
	value: string;
}

export interface FileUploaderProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	accept: string;
	files: FileList | undefined;
	required?: boolean;
}

export interface NumberInputProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	required?: boolean;
	value: number | undefined;
}

export interface RadioProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	group: string | number;
	id: string;
	required?: boolean;
}

export interface RangeProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	min: number;
	max: number;
	required?: boolean;
	step: number;
	value: number;
}

export interface SelectProps extends HTMLSelectAttributes, BaseFieldProps {
	children: Snippet;
	id: string;
	required?: boolean;
}

export interface TextInputProps extends Omit<HTMLInputAttributes, 'type'>, BaseFieldProps {
	id: string;
	required?: boolean;
	value: string;
}
