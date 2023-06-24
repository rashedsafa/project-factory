import type { Meta, StoryObj } from "@storybook/react";
import { MasterList } from ".";
import CardImage from "../../../images/cardImage.png";

const meta = {
  title: "Organism/MasterList",
  component: MasterList,
  tags: ["autodocs"],
} satisfies Meta<typeof MasterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    masters: [
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
      {
        imgSrc: CardImage,
        title: "Shervin Mashayekh",
        profession: "Additive Product Manager",
        twitterLink: "#",
        fbLink: "#",
        instagramLink: "#",
        aboutLink: "#",
      },
    ],
  },
};
