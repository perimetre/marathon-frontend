import { GetTypeQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';

export type TypeTemplateProps = {
  data?: GetTypeQuery;
  onSelectCard: (selected: string) => void;
  selectedCard?: string;
};

export const TypeTemplate: React.FC<TypeTemplateProps> = ({ data, selectedCard, onSelectCard }) => {
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.types.map((type) => (
        <Card
          key={`type-card-${type.id}`}
          active={selectedCard === type.slug}
          onClick={() => onSelectCard(type.slug)}
          image={type.thumbnailUrl || ''}
          title={type.name}
          description={type.description}
        />
      ))}
    </div>
  );
};
