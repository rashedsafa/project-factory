import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./list";

const meta = {
  title: "Molecule/List",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["content", "content", "content"],
  },
};
