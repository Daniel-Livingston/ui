// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { TOCItem } from '$lib/internal/types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			title: string;
			description: string;
			toc?: Array<TOCItem>;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
