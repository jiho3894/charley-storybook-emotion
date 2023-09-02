import { IconProps } from '@/stories/Icon/Icon';

const PlayPause = ({ size, color }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="4" width="4" height="16" rx="1" fill={color} />
      <rect x="13" y="4" width="4" height="16" rx="1" fill={color} />
    </svg>
  );
};

export default PlayPause;
