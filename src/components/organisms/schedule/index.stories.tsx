import type { Meta, StoryObj } from "@storybook/react";
import { Schedule } from ".";

const meta = {
  title: "Organism/Schedule",
  component: Schedule,
  tags: ["autodocs"],
} satisfies Meta<typeof Schedule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
