import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from ".";

const meta = {
  title: "Molecule/Tab",
  component: Tab,
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { title: "tab 1", content: "content 1" },
      { title: "tab 2", content: "content 2" },
      { title: "tab 3", content: "content 3" },
    ],
  },
};
