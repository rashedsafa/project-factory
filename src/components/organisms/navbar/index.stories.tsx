import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from ".";

const meta = {
  title: "Organism/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    homeRef: "#",
    navLinks: [
      { title: "Projects", href: "#" },
      { title: "Partners", href: "#" },
      { title: "FAQ", href: "#" },
      { title: "Masters", href: "#" },
      { title: "Classes", href: "#" },
      { title: "Course Experience", href: "#" },
      { title: "About Us", href: "#" },
    ],
    btnText: "Register",
  },
};
