import React from "react";
import { SessionStrip } from "../session-strip";
import { Image } from "../../atoms/image";

export interface SessionCardProps {
  session: string;
  duration: string;
  date: string;
  videoLink: string;
  imgSrc: string;
  imgSrc2?: string;
  details: React.ReactNode;
}

export const SessionCard: (props: SessionCardProps) => JSX.Element = ({
  session,
  duration,
  date,
  videoLink,
  imgSrc,
  imgSrc2,
  details,
}) => {
  return (
    <div className="m-sessionCard">
      <SessionStrip
        session={session}
        duration={duration}
        date={date}
        videoLink={videoLink}
      />
      <div className="m-sessionCard__inner">
        <div className="m-sessionCard__imageWrapper">
          <Image src={imgSrc} />
          {imgSrc2 && <Image src={imgSrc2} />}
        </div>
        <div>{details}</div>
      </div>
    </div>
  );
};
