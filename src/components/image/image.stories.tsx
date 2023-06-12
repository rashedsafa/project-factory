import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./image";
import SampleImage1 from "../../../public/image/kia_ux_course.jpg";
import SampleImage2 from "../../../public/image/sample.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atom/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    src: SampleImage1,
  },
};

export const WithRadius: Story = {
  args: {
    src: SampleImage2,
    radius: 10,
    height: "320px",
    width: "320px",
  },
};

export const Sized: Story = {
  args: {
    src: SampleImage1,
    height: "160px",
    width: "160px",
  },
};
