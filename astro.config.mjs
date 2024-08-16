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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});



export default defineConfig({

})