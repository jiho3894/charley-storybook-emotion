import styled from '@emotion/styled';
import Icon from '../Icon/Icon';
import { BasicSize, Colors } from '../styles';
import Text from '../Text/Text';
import { TAssistiveTextType } from '../type';

interface IAssistiveTextStyleProps {
  type: TAssistiveTextType;
}

interface IAssistiveTextProps extends IAssistiveTextStyleProps {
  label: string;
}

const AssistiveText = ({ type = 'Helper', label }: IAssistiveTextProps) => {
  return (
    <AssistiveTextWrapper type={type}>
      <Icon icon="Alert_Circle" size="16px" color={type === 'Helper' ? 'BGray' : 'Error'} />
      <Text variant="Body2">{label}</Text>
    </AssistiveTextWrapper>
  );
};

const AssistiveTextWrapper = styled.div<IAssistiveTextStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: ${BasicSize.Spacing_XXS};
  color: ${({ type }) => (type === 'Helper' ? Colors.Opacity_Black600 : Colors.Error800)};
`;

export default AssistiveText;
