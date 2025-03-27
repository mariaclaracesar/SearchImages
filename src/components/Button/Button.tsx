import {Text, TouchableOpacityProps} from 'react-native';
import {TouchableOpacityBox} from '../Box/Box';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacityBox>
      <Text
        style={{
          width: 312,
          height: 40,
          borderRadius: 8,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        maria
      </Text>
    </TouchableOpacityBox>
  );
}
