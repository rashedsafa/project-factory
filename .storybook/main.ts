import type { StorybookConfig } from "@storybook/react-webpack5";
import { sassResourcesLoader } from 'sass-resources-loader';
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
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-resources-loader",
          options: {
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
