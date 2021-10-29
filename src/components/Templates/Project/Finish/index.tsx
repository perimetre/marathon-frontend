import { GetFinishQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';

export type FinishTemplateProps = {
  data?: GetFinishQuery;
  onSelectCard: (selected: string) => void;
  selectedCard?: string;
};

export const FinishTemplate: React.FC<FinishTemplateProps> = ({ data, selectedCard, onSelectCard }) => {
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.finishes.map((finish) => (
        <Card
          key={`finish-card-${finish.id}`}
          active={selectedCard === finish.slug}
          onClick={() => onSelectCard(finish.slug)}
          image={finish.thumbnailUrl}
          title={finish.name}
          description={finish.description}
        />
      ))}
    </div>
  );
};
