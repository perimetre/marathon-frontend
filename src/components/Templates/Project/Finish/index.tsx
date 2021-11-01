import { useField } from 'formik';
import { GetFinishQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';

export type FinishTemplateProps = {
  data?: GetFinishQuery;
};

export const FinishTemplate: React.FC<FinishTemplateProps> = ({ data }) => {
  const [field, , helpers] = useField({ name: 'finish' });
  return (
    <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
      {data?.finishes.map((finish) => (
        <Card
          key={`finish-card-${finish.id}`}
          active={field.value === finish.id}
          onClick={() => helpers.setValue(finish.id)}
          image={finish.thumbnailUrl}
          title={finish.name}
          description={finish.description}
        />
      ))}
    </div>
  );
};
