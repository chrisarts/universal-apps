import type { PropsWithChildren } from 'react';
import { Text } from '@chrisarts/universal/text';
import { View } from '@chrisarts/universal/view';

interface IFieldSetProps extends PropsWithChildren {
  focused: boolean;
  isValid: boolean;
  hasValue: boolean;
  tw?: string;
  isDisabled: boolean;
  label: string;
}

const FieldSet = ({
  children,
  focused,
  hasValue,
  isDisabled,
  isValid,
  tw,
  label,
}: IFieldSetProps) => {
  return (
    <View
      tw={`
        relative my-2 h-20 w-full overflow-hidden rounded-xl bg-green-400
        ${isValid && 'ring-red-600 ring-1'}
        ${isDisabled && 'opacity-70'}
    `}
    >
      <Text variant='label'>{label}</Text>
      {children}
    </View>
  );
};

export { FieldSet };
