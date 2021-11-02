import { useField } from 'formik';
import { GetTypeQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';

export type TypeTemplateProps = {
  data?: GetTypeQuery;
};

const TypeTemplate: React.FC<TypeTemplateProps> = ({ data }) => {
  const [field, , helpers] = useField({ name: 'type' });
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.types.map((type) => (
        <Card
          key={`type-card-${type.id}`}
          active={field.value === type.id}
          onClick={() => helpers.setValue(type.id)}
          image={type.thumbnailUrl || ''}
          title={type.name}
          description={type.description}
        />
      ))}
    </div>
  );
};

export default TypeTemplate;
