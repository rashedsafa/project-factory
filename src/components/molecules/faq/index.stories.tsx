import type { Meta, StoryObj } from "@storybook/react";
import { Faq } from ".";

const meta = {
  title: "Molecule/Faq",
  component: Faq,
  tags: ["autodocs"],
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question: "Does this course need any special requirements?",
    answer: "No Special requirement",
  },
};
