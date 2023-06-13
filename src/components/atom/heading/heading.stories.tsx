import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./heading";

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
    size: 50,
    children: "Experience",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    size: 32,
    children: "Experience",
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    size: 24,
    children: "Experience",
  },
};

export const WithBg: Story = {
  args: {
    level: "h2",
    size: 32,
    children: "Course Experience",
    background:"Experience",
  },
};