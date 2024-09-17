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
				twitter: 'https://x.com/odininitiative',
				youtube: 'https://www.youtube.com/@odininitiative'
			},
			sidebar: [
				{
					label: 'Presentations',
					autogenerate: { directory: 'presentations' },
				},
				{
					label: 'Links',
					autogenerate: { directory: 'links' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
