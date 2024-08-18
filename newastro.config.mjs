import { defineConfig } from 'astro/config'; // Import the defineConfig function from Astro, which is used to define the site's configuration.
import starlight from '@astrojs/starlight'; // Import the Starlight integration from Astro, which is used to power the documentation site.

// https://astro.build/config
export default defineConfig({
  site: 'https://odin-initiative.github.io', // The base URL for your site. This is important for generating absolute URLs.
  base: '/study-group', // The base path for your site. This is necessary when your site is not served from the root of the domain.

  integrations: [
    starlight({
      title: 'ODIN Study Group', // The title of your site, which will appear in the browser tab and in other metadata.

      social: {
        github: 'https://github.com/ODIN-Initiative', // The GitHub URL for the project, used in social icons or links on your site.
      },

      sidebar: [
        {
          label: 'Guides', // This creates a "Guides" section in the sidebar navigation.
          items: [
            // Each item here corresponds to a page or guide in the "Guides" section.
            { label: 'Example Guide', slug: 'guides/example' }, // A link labeled "Example Guide" that points to the "guides/example" page.
          ],
        },
        {
          label: 'Reference', // This creates a "Reference" section in the sidebar navigation.
          autogenerate: { directory: 'reference' }, // Automatically generate sidebar items based on the files found in the "reference" directory.
        },
      ],
    }),
  ],
});
