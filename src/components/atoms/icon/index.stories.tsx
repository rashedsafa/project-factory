import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";

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
  },
};

export const Clock: Story = {
  args: {
    icon: "clock",
  },
};

export const FaceBook_white: Story = {
  args: {
    icon: "facebook_white",
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
  },
};

export const Instagram_white: Story = {
  args: {
    icon: "instagram_white",
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
  },
};

export const Left_arrow: Story = {
  args: {
    icon: "left_arrow",
  },
};

export const Menu: Story = {
  args: {
    icon: "menu",
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
  },
};

export const Play: Story = {
  args: {
    icon: "play",
  },
};

export const Plus: Story = {
  args: {
    icon: "plus",
  },
};

export const Right_arrow: Story = {
  args: {
    icon: "right_arrow",
  },
};

export const Tick: Story = {
  args: {
    icon: "tick",
  },
};

export const Twitter_white: Story = {
  args: {
    icon: "twitter_white",
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
  },
};
