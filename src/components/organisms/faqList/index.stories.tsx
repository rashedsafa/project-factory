import type { Meta, StoryObj } from "@storybook/react";
import { FaqList } from ".";

const meta = {
  title: "Organism/FaqList",
  component: FaqList,
  tags: ["autodocs"],
} satisfies Meta<typeof FaqList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqArray: [
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
      {
        question: "Does this course need any special requirements?",
        answer: "No Special requirement",
      },
    ],
  },
};
