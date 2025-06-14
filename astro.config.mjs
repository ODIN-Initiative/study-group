import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
	site: "https://odin-initiative.github.io",
	base: "/study-group",
	integrations: [
		starlight({
			title: "ODIN Study Group",
			social: [
				{ icon: "twitter", label: "x", href: "https://x.com/odininitiative" },
				{ icon: "youtube", label: "Youtube", href: "https://www.youtube.com/@odininitiative" },
				{ icon: "discord", label: "Discord", href: "https://discord.gg/FVRjwdHR" },
				{ icon: "github", label: "Github", href: "https://github.com/ODIN-Initiative" },
			],
			sidebar: [
				{
					label: "Presentations",
					autogenerate: { directory: "presentations" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/custom.css",
			  ],
		}),
	],
	output: "static"
});
