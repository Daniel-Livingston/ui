import type { SVGAttributes } from 'svelte/elements';

export interface IconProps extends SVGAttributes<SVGElement> {
	size?: number;
	color?: string;
}

export interface ChevronIconProps extends IconProps {
	direction?: 'up' | 'down' | 'left' | 'right';
}

export interface CloseIconProps extends IconProps {}

export interface InfoIconProps extends IconProps {}

export interface SuccessIconProps extends IconProps {}

export interface WarningIconProps extends IconProps {}
