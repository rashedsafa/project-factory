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
    imgSrc: [CardImage, CardImage, CardImage],
  },
};
