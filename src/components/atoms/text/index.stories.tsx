import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta = {
  title: "Atom/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size16: Story = {
  args: {
    size: 16,
    children: "Experience",
  },
};

export const Size18: Story = {
  args: {
    size: 18,
    children: "Experience",
  },
};

export const Size19: Story = {
  args: {
    size: 19,
    children: "Experience",
  },
};

export const Size20: Story = {
  args: {
    size: 20,
    children: "Experience",
  },
};

export const Size21: Story = {
  args: {
    size: 21,
    children:
      "Who are the audiences of the product design period of the product factory?",
    lineHeight: 33 / 21,
  },
};

export const Size22: Story = {
  args: {
    size: 22,
    children: "Experience",
  },
};

export const Size23: Story = {
  args: {
    size: 23,
    children: "Experience",
  },
};
