import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta = {
  title: "Organism/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fbLink: "#",
    twitterLink:"#",
    instagramLink:"#",
    contactText: "Contact Number: 0912-1234567",
  },
};
