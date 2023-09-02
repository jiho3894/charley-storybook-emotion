// Text Props
export type TFontSize = 'H1' | 'H2' | 'H3' | 'H3U' | 'H4' | 'H4U' | 'H5' | 'Body1' | 'Body2' | 'Body3' | 'Caption';

// Icon Props
export type TIconType =
  | 'Close_Line'
  | 'Alert_Circle'
  | 'Eye'
  | 'Eye_Slash'
  | 'Chevron_Left'
  | 'Chevron_Right'
  | 'Arrow_Top'
  | 'Refresh'
  | 'Play_Start'
  | 'Play_Pause'
  | 'Play_Stop'
  | 'Play_Mic';
export type TIconSize = '24px' | '16px';
export type TIconColor = 'BGray' | 'Black' | 'WGray' | 'White' | 'Primary' | 'Error';
export type TTipIconSize = 'ON' | 'OFF';

// Button Props
export type TButtonSize = 'Large' | 'Middle' | 'Small';
export type TButtonState = 'Enabled' | 'RuinEnabled';
export type TButtonType = 'Filled' | 'Border' | 'Ghost';
export type TButtonIcon = 'NoIcon' | 'Left' | 'Right' | 'BothSide' | 'OnlyIcon';

// TextButton Props
export type TTextButtonState = 'Emphasis' | 'Normal';

// ButtonGroup Props
export type TButtonGroupDirection = 'Horizontal' | 'Vertical';

// NavigationBar Props
export type TNavigationBarIcon = 'BothSide' | 'Left' | 'Right';

// AssistiveText Props
export type TAssistiveTextType = 'Helper' | 'Error';

// Tooltip Props
export type TTooltipType = 'Bottom_Left' | 'Bottom_Center' | 'Bottom_Right' | 'Top_Left' | 'Top_Center' | 'Top_Right';

// Trailing Props
export type TTrailingSizeProps = 'Large' | 'Middle';

// Divider Props
export type TDividerProps = 'Thin' | 'Thickest';

// InputType (Radio, CheckBox) Props
export type TInputSizeProps = 'Middle' | 'Small';
