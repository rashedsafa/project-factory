import React from "react";
import { Card } from "../../molecules/card";
import { Image } from "../../atoms/image";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";

interface ProjectCourseProps {
  imgSrc: string;
  heading: string;
  subheading: string;
  description: string;
  btnText: string;
  btnOnclick: () => void;
}

export const ProjectCourse: (props: ProjectCourseProps) => JSX.Element = ({
  heading,
  imgSrc,
  subheading,
  description,
  btnText,
  btnOnclick,
}) => {
  return (
    <Card className="o-projectCourse">
      <div>
        <Heading level="h1">{heading}</Heading>
        <div className="o-projectCourse__subheading">{subheading}</div>
        <Text size={23} className="o-projectCourse__description">
          {description}
        </Text>
        <Button onClick={btnOnclick} size="large" mode="primary">
          {btnText}
        </Button>
      </div>
      <Image src={imgSrc} alt="project_course" />
    </Card>
  );
};
