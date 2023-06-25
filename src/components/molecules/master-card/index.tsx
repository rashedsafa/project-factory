import { Icon } from "../../atoms/icon";
import { Image } from "../../atoms/image";
import { Text } from "../../atoms/text";

export interface MasterCardProps {
  imgSrc: string;
  title: string;
  profession: string;
  twitterLink: string;
  fbLink: string;
  instagramLink: string;
  aboutLink: string;
}

export const MasterCard: (props: MasterCardProps) => JSX.Element = ({
  imgSrc,
  title,
  profession,
  twitterLink,
  fbLink,
  instagramLink,
  aboutLink,
}) => {
  return (
    <div className="m-masterCard">
      <div className="m-masterCard__imageWrapper">
        <Image src={imgSrc} radius={10} />
        <div className="m-masterCard__panel">
          <div className="m-masterCard__links">
            <a href={twitterLink}>
              <Icon icon="twitter_white" />
            </a>
            <a href={fbLink}>
              <Icon icon="facebook_white" />
            </a>
            <a href={instagramLink}>
              <Icon icon="instagram_white" />
            </a>
          </div>
          <a href={aboutLink} className="m-masterCard__about">
            <span>
              <Icon icon="menu" />
            </span>
            <span className="m-masterCard__aboutText">About Master</span>
          </a>
        </div>
      </div>
      <div className="m-masterCard__title">{title}</div>
      <Text size={18} className="m-masterCard__profession">
        {profession}
      </Text>
    </div>
  );
};
