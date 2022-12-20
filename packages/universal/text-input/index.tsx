import { TextInput as NativeInput } from 'react-native';
import { FieldSet } from '@chrisarts/universal/fieldset';
import { styled } from '@chrisarts/universal/tailwind';

const StyledInput = styled(NativeInput);

const TextInput = () => {
  return (
    <FieldSet focused hasValue isDisabled isValid label='sac'>
      <StyledInput className='bg-green' />
    </FieldSet>
  );
};

export { TextInput };
