import { Image } from "../../atoms/image";
import Logo from "../../../images/components/logo_black.png";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";

interface FooterProps {
  fbLink: string;
  instagramLink: string;
  twitterLink: string;
  contactText: string;
}

export const Footer: (props: FooterProps) => JSX.Element = ({
  fbLink,
  instagramLink,
  twitterLink,
  contactText,
}) => {
  return (
    <div className="o-footer">
      <div className="o-footer__links">
        <a href={fbLink}>
          <Icon icon="facebook" />
        </a>
        <a href={twitterLink}>
          <Icon icon="twitter" />
        </a>
        <a href={instagramLink}>
          <Icon icon="instagram" />
        </a>
      </div>
      <Image src={Logo} alt="logo_black" />
      <Text size={20}>{contactText}</Text>
    </div>
  );
};
