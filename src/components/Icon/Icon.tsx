import {useAppTheme} from '@hooks';
import React from 'react';
import {Pressable} from 'react-native';
import {ThemeColors} from 'theme';
import {SearchIcon} from '../../assets/icons/SearchIcon';

export interface IconBase {
  size?: number;
  color?: string;
}
export interface IconProps {
  name: IconNames;
  color?: ThemeColors;
  size?: number;
  onPress?: () => {};
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  searchIcon: SearchIcon,
};

type IconType = typeof iconRegistry;
export type IconNames = keyof IconType;
