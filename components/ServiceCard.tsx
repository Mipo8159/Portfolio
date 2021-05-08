import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({
  service: { title, about, Icon },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 mr-3 text-green' />
      <div>
        <h5 className='font-bold'>{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
