import { useField } from 'formik';
import { GetCollectionsQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import { ChevronRight } from '../../../UI/Icons';

export type CollectionTemplateProps = {
  data?: GetCollectionsQuery;
};

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({ data }) => {
  const [field, , helpers] = useField({ name: 'collection' });
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.collections.map((collection) => (
        <Card
          key={`collection-card-${collection.id}`}
          category={collection.subtitle}
          active={field.value === collection.id}
          onClick={() => helpers.setValue(collection.id)}
          image={collection.thumbnailUrl}
          title={collection.name}
          description={collection.description}
          footer={
            <p className="flex items-center text-sm font-semibold gap-1">
              {collection.footer}
              <ChevronRight className="w-5 h-5 text-mui-primary" />
            </p>
          }
        />
      ))}
    </div>
  );
};

export default CollectionTemplate;
