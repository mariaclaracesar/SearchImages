import {useAppTheme} from '@hooks';
import {useAppSafeArea} from 'src/hooks/useAppSafeArea';
import {Box, BoxProps} from '../Box/Box';

import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable,
  style,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
