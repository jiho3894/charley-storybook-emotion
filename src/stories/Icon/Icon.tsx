import AlertCircle from '../assets/svg/AlertCircle';
import ArrowTop from '../assets/svg/ArrowTop';
import ChevronLeft from '../assets/svg/ChevronLeft';
import ChevronRight from '../assets/svg/ChevronRight';
import CloseLine from '../assets/svg/CloseLine';
import Eye from '../assets/svg/Eye';
import EyeSlash from '../assets/svg/EyeSlash';
import PlayMic from '../assets/svg/PlayMic';
import PlayPause from '../assets/svg/PlayPause';
import PlayStart from '../assets/svg/PlayStart';
import PlayStop from '../assets/svg/PlayStop';
import Refresh from '../assets/svg/Refresh';
import { getColors } from '../hook';
import { TIconColor, TIconSize, TIconType } from '../type';

export interface IconProps {
  size?: TIconSize;
  color?: string;
}

export interface IconAllProps extends IconProps {
  icon: TIconType;
  size?: TIconSize;
  color?: TIconColor;
}

const Icon = ({ icon = 'Chevron_Right', size = '24px', color = 'BGray' }: IconAllProps) => {
  const settingColor = getColors(color);
  switch (icon) {
    case 'Close_Line':
      return <CloseLine size={size} color={settingColor} />;
    case 'Alert_Circle':
      return <AlertCircle size={size} color={settingColor} />;
    case 'Eye':
      return <Eye size={size} color={settingColor} />;
    case 'Eye_Slash':
      return <EyeSlash size={size} color={settingColor} />;
    case 'Chevron_Left':
      return <ChevronLeft size={size} color={settingColor} />;
    case 'Chevron_Right':
      return <ChevronRight size={size} color={settingColor} />;
    case 'Arrow_Top':
      return <ArrowTop size={size} color={settingColor} />;
    case 'Refresh':
      return <Refresh size={size} color={settingColor} />;
    case 'Play_Start':
      return <PlayStart size={size} color={settingColor} />;
    case 'Play_Pause':
      return <PlayPause size={size} color={settingColor} />;
    case 'Play_Stop':
      return <PlayStop size={size} color={settingColor} />;
    case 'Play_Mic':
      return <PlayMic size={size} color={settingColor} />;
    default:
      return <CloseLine size={size} color={settingColor} />;
  }
};

export default Icon;
