import React, {useRef} from 'react';

import {useAppTheme} from '@hooks';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {Icon, IconNames} from '../Icon/Icon';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  boxProps?: BoxProps;
  iconName?: IconNames;
}

export function TextInput({
  label,
  boxProps,
  iconName,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium">{label}</Text>
        <Box
          {...$textInputContainer}
          flexDirection="row"
          padding="s8"
          alignItems="center">
          <Box margin="s8">
            {iconName && <Icon name={iconName} size={20} color="gray2" />}
          </Box>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
        </Box>
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.headingSmall,
};

const $textInputContainer: BoxProps = {
  padding: 's14',
  borderColor: 'gray4',
  borderRadius: 's16',
  backgroundColor: 'gray4',
};
