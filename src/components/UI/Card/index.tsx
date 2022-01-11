import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import SkeletonImage from '../SkeletonImage';

export type CardProps = {
  onClick?: () => void;
  isComingSoon?: boolean;
  active?: boolean;
  image?: string | null;
  title?: string;
  category?: string | null;
  description?: string | null;
  imageClassName?: HTMLElement['className'];
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  isComingSoon,
  imageClassName,
  active,
  category,
  footer,
  onClick
}) => {
  return (
    <div
      onClick={() => !isComingSoon && onClick && onClick()}
      aria-hidden="true"
      className={classNames('card relative overflow-hidden', active && 'active')}
    >
      {image && (
        <div className="relative h-52">
          <SkeletonImage
            key={title}
            layout="fill"
            className={classNames('object-contain', imageClassName)}
            src={image}
            alt={title || ''}
          />
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
      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <div className="absolute w-full h-full bg-black opacity-30"></div>
          <h2 className="absolute text-2xl font-black text-white uppercase top-1/4">
            <FormattedMessage id="project.comingSoon" />
          </h2>
        </div>
      )}
    </div>
  );
};

export default Card;
