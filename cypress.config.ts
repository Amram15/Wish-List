import { defineConfig } from "cypress";

export default defineConfig({
	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
	pageLoadTimeout: 1,
	chromeWebSecurity: false,
});
