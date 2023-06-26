import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCourse } from ".";
import SampleImage1 from "../../../images/kia_ux_course.jpg";

const meta = {
  title: "Organism/ProjectCourse",
  component: ProjectCourse,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCourse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Product Design Course",
    imgSrc: SampleImage1,
    subheading: "Product Factory",
    description:
      "Learn how design thinking, user research, business vision and marketing, and finally designing and creating real digital products for real users.",
    btnText: "Start Register",
  },
};
