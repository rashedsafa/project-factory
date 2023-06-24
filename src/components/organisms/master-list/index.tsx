import { MasterCard, MasterCardProps } from "../../molecules/master-card";

interface MasterListProps {
  masters: MasterCardProps[];
}

export const MasterList: (props: MasterListProps) => JSX.Element = ({
  masters,
}) => {
  return (
    <div className="o-masterList">
      {masters.map((master, index) => (
        <MasterCard
          key={index}
          imgSrc={master.imgSrc}
          title={master.title}
          profession={master.profession}
          twitterLink={master.twitterLink}
          fbLink={master.fbLink}
          instagramLink={master.instagramLink}
          aboutLink={master.aboutLink}
        />
      ))}
    </div>
  );
};
