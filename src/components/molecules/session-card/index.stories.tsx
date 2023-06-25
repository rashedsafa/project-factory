import type { Meta, StoryObj } from "@storybook/react";
import { SessionCard } from ".";
import SampleImage from "../../../images/sample.png";

const meta = {
  title: "Molecule/SessionCard",
  component: SessionCard,
  tags: ["autodocs"],
} satisfies Meta<typeof SessionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    session: "First Session",
    date: "5 November",
    duration: "6 hour",
    videoLink: "#",
    imgSrc: SampleImage,
    details:
      "In the seventh session, we are in the world of product management. We will examine software companies' structures as well as in-team and in-team interactions. In this session, we will look at the duties and characteristics of product team members as well as identify product strategies and learn about different software development methodologies. And finally, we'll look at a product designer's red line.",
  },
};

export const TwoImage: Story = {
  args: {
    session: "First Session",
    date: "5 November",
    duration: "6 hour",
    videoLink: "#",
    imgSrc: SampleImage,
    imgSrc2: SampleImage,
    details:
      "In the seventh session, we are in the world of product management. We will examine software companies' structures as well as in-team and in-team interactions. In this session, we will look at the duties and characteristics of product team members as well as identify product strategies and learn about different software development methodologies. And finally, we'll look at a product designer's red line.",
  },
};
