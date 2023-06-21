import type { Meta, StoryObj } from "@storybook/react";
import { MasterCard } from ".";

const meta = {
  title: "Molecule/MasterCard",
  component: MasterCard,
  tags: ["autodocs"],
} satisfies Meta<typeof MasterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "content",
  },
};
