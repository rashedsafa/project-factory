export const iconList = [
  "calendar",
  "clock",
  "facebook_white",
  "facebook",
  "instagram_white",
  "instagram",
  "left_arrow",
  "menu",
  "minus",
  "play",
  "plus",
  "right_arrow",
  "tick",
  "twitter_white",
  "twitter",
];

interface IconProps {
  icon: (typeof iconList)[number];
}

export const Icon = ({ icon }: IconProps) => {
  return (
    <span className={["a-icon", `a-icon--${icon}`].join(" ")}>
      <i className="a-icon__icon" />
    </span>
  );
};
