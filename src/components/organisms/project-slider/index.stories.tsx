import type { Meta, StoryObj } from "@storybook/react";
import { ProjectSlider } from ".";
import CardImage from "../../../images/cardImage.png";

const meta = {
  title: "Organism/ProjectSlider",
  component: ProjectSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "Design To Do List app",
    listDescription:
      "The previous student design project was the To Do List application product factory, The counter examples are the result of the efforts of the students and their teamwork in the first course.",
    listItems: [],
    imgSrc: [CardImage, CardImage, CardImage],
  },
};
