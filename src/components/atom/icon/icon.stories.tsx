import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  args: {
    icon: "calendar",
    height: 29,
    width: 29,
  },
};

export const Clock: Story = {
  args: {
    icon: "clock",
    height: 25,
    width: 25,
  },
};

export const FaceBook_white: Story = {
  args: {
    icon: "facebook_white",
    height: 25,
    width: 25,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const FaceBook: Story = {
  args: {
    icon: "facebook",
    height: 25,
    width: 25,
  },
};

export const Instagram_white: Story = {
  args: {
    icon: "instagram_white",
    height: 25,
    width: 25,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Instagram: Story = {
  args: {
    icon: "instagram",
    height: 25,
    width: 25,
  },
};

export const Left_arrow: Story = {
  args: {
    icon: "left_arrow",
    height: 12,
    width: 22,
  },
};

export const Menu: Story = {
  args: {
    icon: "menu",
    height: 25,
    width: 25,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Minus: Story = {
  args: {
    icon: "minus",
    height: 25,
    width: 25,
  },
};

export const Play: Story = {
  args: {
    icon: "play",
    height: 25,
    width: 25,
  },
};

export const Plus: Story = {
  args: {
    icon: "plus",
    height: 25,
    width: 25,
  },
};

export const Right_arrow: Story = {
  args: {
    icon: "right_arrow",
    height: 25,
    width: 25,
  },
};

export const Tick: Story = {
  args: {
    icon: "tick",
    height: 25,
    width: 25,
  },
};

export const Twitter_white: Story = {
  args: {
    icon: "twitter_white",
    height: 25,
    width: 25,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Twitter: Story = {
  args: {
    icon: "twitter",
    height: 25,
    width: 25,
  },
};
