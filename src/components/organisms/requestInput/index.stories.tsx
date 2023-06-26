import type { Meta, StoryObj } from "@storybook/react";
import { RequestInput } from ".";

const meta = {
  title: "Organism/RequestInput",
  component: RequestInput,
  tags: ["autodocs"],
} satisfies Meta<typeof RequestInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Request a list of headings",
    requestText:
      "Please enter your email address to receive course titles, the topics will be emailed to you.",
    confirmationText:
      "Your email has been successfully registered, headlines will be sent to you soon.",
  },
};
