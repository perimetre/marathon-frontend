import { GetCollectionsQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import { ChevronRight } from '../../../UI/Icons';

export type CollectionTemplateProps = {
  data?: GetCollectionsQuery;
  onSelectCard: (selected: string) => void;
  selectedCard?: string;
};

export const CollectionTemplate: React.FC<CollectionTemplateProps> = ({ data, selectedCard, onSelectCard }) => {
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.collections.map((collection) => (
        <Card
          key={`collection-card-${collection.id}`}
          active={selectedCard === collection.slug}
          category={collection.subtitle}
          onClick={() => onSelectCard(collection.slug)}
          image={collection.thumbnailUrl}
          title={collection.name}
          description={collection.description}
          footer={
            <p className="flex items-center text-sm font-semibold gap-1">
              {collection.footer}
              <ChevronRight className="w-5 h-5 text-primary" />
            </p>
          }
        />
      ))}
    </div>
  );
};
