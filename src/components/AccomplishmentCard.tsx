import { Accomplishment } from '../types';

interface AccomplishmentCardProps {
  accomplishment: Accomplishment;
}

const AccomplishmentCard: React.FC<AccomplishmentCardProps> = ({ accomplishment }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-border">
      <h3 className="text-2xl font-heading mb-2 font-bold text-tertiary">{accomplishment.title}</h3>
      <p className="text-secondaryText text-base" dangerouslySetInnerHTML={{ __html: accomplishment.description }} />
    </div>
  );
};

export default AccomplishmentCard;