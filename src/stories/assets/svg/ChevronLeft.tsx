import { IconProps } from '@/stories/Icon/Icon';

const ChevronLeft = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2328 4.81955C12.6086 5.22426 12.5852 5.85699 12.1805 6.2328L5.96961 12L12.1805 17.7672C12.5852 18.143 12.6086 18.7757 12.2328 19.1805C11.857 19.5852 11.2243 19.6086 10.8195 19.2328L3.81955 12.7328C3.61578 12.5436 3.5 12.2781 3.5 12C3.5 11.7219 3.61578 11.4564 3.81955 11.2672L10.8195 4.76721C11.2243 4.39141 11.857 4.41484 12.2328 4.81955Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;
