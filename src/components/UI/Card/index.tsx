import classNames from 'classnames';
import Image from 'next/image';

export type CardProps = {
  onClick?: () => void;
  active?: boolean;
  horizontal?: boolean;
  image?: string | null;
  title?: string;
  category?: string | null;
  description?: string | null;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, image, description, active, horizontal, category, footer, onClick }) => {
  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      className={classNames('card', active && 'active', horizontal && 'flex w-full h-24')}
    >
      {image && (
        <div className={classNames('relative h-52', horizontal && 'w-44')}>
          <Image layout="fill" className="object-cover" src={image} alt={title} />
        </div>
      )}
      {category && (
        <div className="bg-primary">
          <h3 className="p-3 px-6 text-lg text-white uppercase">{category}</h3>
        </div>
      )}
      <div className={classNames('p-6', horizontal && 'flex items-center')}>
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {description && <p className="my-4">{description}</p>}
        {footer}
      </div>
    </div>
  );
};

export default Card;
