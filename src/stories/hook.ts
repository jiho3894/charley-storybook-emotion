import { Colors } from './styles';
import { TIconColor, TTooltipType } from './type';

export const getColors = (color: TIconColor) => {
  switch (color) {
    case 'BGray':
      return Colors.Opacity_Black300;
    case 'Black':
      return Colors.Opacity_Black;
    case 'WGray':
      return Colors.Opacity_White300;
    case 'White':
      return Colors.Opacity_White;
    case 'Primary':
      return Colors.Primary600;
    case 'Error':
      return Colors.Error600;
    default:
      return Colors.Opacity_Black300;
  }
};

export const getPositionLine = (position: TTooltipType) => {
  const positionLine = position.split('_');
  return positionLine;
};
