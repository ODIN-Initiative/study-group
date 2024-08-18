import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	site: 'https://odin-initiative.github.io',
	base: '/study-group',
	integrations: [
		starlight({
			title: 'ODIN Study Group',
			social: {
				github: 'https://github.com/ODIN-Initiative',
			},
			sidebar: [
				{
					label: 'Presentations',
					autogenerate: { directory: 'presentations' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
