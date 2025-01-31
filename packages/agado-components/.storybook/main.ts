import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-essentials"],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	staticDirs: ["./assets"],
	viteFinal: (config) => {
		return {
			...config,
			build: {
				...config.build,
				target: "esnext",
			},
		};
	},
};
export default config;
