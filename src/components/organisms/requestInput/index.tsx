import React from "react";
import { Image } from "../../atoms/image";
import RequestInputImage from "../../../images/components/requestInputImage.png";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";

interface RequestInputProps {
  heading: React.ReactNode;
  requestText: React.ReactNode;
  confirmationText: React.ReactNode;
}

export const RequestInput: (props: RequestInputProps) => JSX.Element = ({
  heading,
  requestText,
  confirmationText,
}) => {
  return (
    <div className="o-requestInput">
      <div>
        <div className="o-requestInput__heading">{heading}</div>
        <Text size={20} className="o-requestInput__requestText">
          {requestText}
        </Text>
        <input className="o-requestInput__input" />
        <div className="o-requestInput__confirmation">
          <Icon icon="tick" />
          <Text size={20}>{confirmationText}</Text>
        </div>
      </div>
      <Image src={RequestInputImage} alt="req" />
    </div>
  );
};
