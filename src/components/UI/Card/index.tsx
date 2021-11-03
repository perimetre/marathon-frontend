import classNames from 'classnames';
import SkeletonImage from '../SkeletonImage';

export type CardProps = {
  onClick?: () => void;
  active?: boolean;
  image?: string | null;
  title?: string;
  category?: string | null;
  description?: string | null;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, image, description, active, category, footer, onClick }) => {
  return (
    <div onClick={onClick} aria-hidden="true" className={classNames('card', active && 'active')}>
      {image && (
        <div className="relative h-52">
          <SkeletonImage layout="fill" className="object-contain" src={image} alt={title || ''} />
        </div>
      )}
      {category && (
        <div className="bg-mui-primary">
          <h3 className="p-3 px-6 text-lg text-white uppercase">{category}</h3>
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {description && <p className="my-4">{description}</p>}
        {footer}
      </div>
    </div>
  );
};

export default Card;
