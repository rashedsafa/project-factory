import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (webpackConfig) => {
    // Find the rule for handling CSS files
    const cssRule = webpackConfig.module?.rules.find((rule) =>
      rule.test?.toString().includes("css")
    );

    // Add the sass-loader to the CSS rule
    if (cssRule) {
      cssRule.use.push("sass-loader");
    }

    // Add the sass-resources-loader to import global Sass files
    webpackConfig.module?.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-resources-loader",
          options: {
            // Or array of paths
            resources: [
              "./src/index.scss",
              "./src/components/atoms/**/index.scss",
              // './src/components/molecules/**/index.scss',
              // './src/components/organisms/**/index.scss',
            ],
          },
        },
      ],
    });

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
