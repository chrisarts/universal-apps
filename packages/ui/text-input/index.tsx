import { TextInput as NativeInput } from 'react-native';
import { FieldSet } from '@universal/ui/fieldset';
import { styled } from 'nativewind';

const StyledInput = styled(NativeInput);

const TextInput = () => {
  return (
    <FieldSet focused hasValue isDisabled isValid label='sac'>
      <StyledInput className='bg-green' />
    </FieldSet>
  );
};

export { TextInput };
