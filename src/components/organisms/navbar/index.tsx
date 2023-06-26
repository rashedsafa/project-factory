import { Image } from "../../atoms/image";
import { Button } from "../../atoms/button";
import Logo from "../../../images/components/logo_white.png";
interface NavbarProps {
  homeRef: string;
  navLinks: {
    title: string;
    href: string;
  }[];
  btnText: string;
  btnOnclick?: () => void;
}

export const Navbar: (props: NavbarProps) => JSX.Element = ({
  homeRef,
  navLinks,
  btnText,
  btnOnclick,
}) => {
  return (
    <div className="o-navbar">
      <div className="o-navbar__wrapper">
        <a href={homeRef}>
          <Image src={Logo} alt="logo" />
        </a>
        <div className="o-navbar__links">
          {navLinks.map((navLink, index) => (
            <a key={index} href={navLink.href} className="o-navbar__link">
              {navLink.title}
            </a>
          ))}
        </div>
        <Button size="small" mode="secondary" onClick={btnOnclick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};
