import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";

const meta = {
  title: "Atom/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: "h1",
    children: "Experience",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    children: "Experience",
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    children: "Experience",
  },
};

export const H4: Story = {
  args: {
    level: "h4",
    children: "Experience",
  },
};

export const WithBg: Story = {
  args: {
    level: "h2",
    children: "Course Experience",
    background: "Experience",
  },
};
