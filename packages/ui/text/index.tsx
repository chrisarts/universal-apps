import type { ComponentProps } from 'react';
import { Text as NativeText } from 'react-native';
import { styled } from '@universal/ui/tailwind';

const variants = {
  default: '',
  h1: 'text-3xl',
  label: 'text-lg text-green-50 font-bold',
};

const StyledText = styled(NativeText);

interface ITextProps extends ComponentProps<typeof StyledText> {
  bold?: boolean;
  variant?: keyof typeof variants;
}

const Text = ({ bold, variant = 'default', ...props }: ITextProps) => {
  return <StyledText tw={`${variants[variant]}`} {...props} />;
};

export { Text };
