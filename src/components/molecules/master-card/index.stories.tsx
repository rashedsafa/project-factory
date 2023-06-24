import type { Meta, StoryObj } from "@storybook/react";
import { MasterCard } from ".";
import CardImage from "../../../images/cardImage.png";

const meta = {
  title: "Molecule/MasterCard",
  component: MasterCard,
  tags: ["autodocs"],
} satisfies Meta<typeof MasterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgSrc: CardImage,
    title: "Shervin Mashayekh",
    profession: "Additive Product Manager",
    twitterLink: "#",
    fbLink: "#",
    instagramLink: "#",
    aboutLink: "#",
  },
};
