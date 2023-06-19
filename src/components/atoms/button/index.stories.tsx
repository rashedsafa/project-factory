import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Text } from "../text";
import { Icon } from "../icon";
// import { Icon } from "../icon/icon";

const meta = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargePrimary: Story = {
  args: {
    mode: "primary",
    size: "large",
    children: <Text size={24}>Start Registration</Text>,
  },
};

export const MediumPrimary: Story = {
  args: {
    mode: "primary",
    size: "medium",
    children: <Text>Registration</Text>,
  },
};

export const SmallSecondary: Story = {
  args: {
    mode: "secondary",
    size: "small",
    children: <Text>Register</Text>,
  },
};

export const IconButton: Story = {
  args: {
    icon: true,
    children: <Icon icon="left_arrow" />,
  },
};
