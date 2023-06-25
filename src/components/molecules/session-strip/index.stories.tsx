import type { Meta, StoryObj } from "@storybook/react";
import { SessionStrip } from ".";

const meta = {
  title: "Molecule/SessionStrip",
  component: SessionStrip,
  tags: ["autodocs"],
} satisfies Meta<typeof SessionStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    session: "First Session",
    date: "5 November",
    duration: "6 hour",
    videoLink: "#",
  },
};
