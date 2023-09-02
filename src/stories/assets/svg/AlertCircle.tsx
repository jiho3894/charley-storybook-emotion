import { IconProps } from '@/stories/Icon/Icon';

const AlertCircle = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_278_2885)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48607 2 2 6.48603 2 12C2 17.5139 6.48607 22 12 22C17.514 22 22 17.5139 22 12C22 6.48603 17.514 2 12 2ZM12 17.3802C11.8098 17.3802 11.6239 17.3239 11.4658 17.2182C11.3077 17.1125 11.1844 16.9623 11.1117 16.7866C11.0389 16.6109 11.0198 16.4176 11.057 16.2311C11.094 16.0446 11.1856 15.8732 11.3201 15.7388C11.4546 15.6043 11.6259 15.5128 11.8124 15.4757C11.999 15.4385 12.1923 15.4576 12.368 15.5303C12.5437 15.6031 12.6938 15.7263 12.7995 15.8845C12.9052 16.0426 12.9616 16.2285 12.9616 16.4186C12.9616 16.6737 12.8602 16.9183 12.6799 17.0986C12.4996 17.2789 12.255 17.3802 12 17.3802ZM13.0442 7.7096L12.7683 13.575C12.7683 13.779 12.6872 13.9746 12.543 14.1189C12.3987 14.2631 12.2031 14.3442 11.999 14.3442C11.795 14.3442 11.5994 14.2631 11.4551 14.1189C11.3109 13.9746 11.2298 13.779 11.2298 13.575L10.9539 7.71247V7.71007C10.9478 7.56917 10.9703 7.42851 11.0201 7.29654C11.0698 7.16458 11.1458 7.04405 11.2434 6.94222C11.3409 6.84037 11.4581 6.75932 11.5878 6.70397C11.7175 6.6486 11.8571 6.62006 11.9981 6.62006C12.1391 6.62006 12.2787 6.6486 12.4084 6.70397C12.5381 6.75932 12.6553 6.84037 12.7528 6.94222C12.8504 7.04405 12.9263 7.16458 12.9761 7.29654C13.0258 7.42851 13.0484 7.56917 13.0423 7.71007L13.0442 7.7096Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_278_2885">
          <rect width="20" height="20" fill="white" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertCircle;
