import { ComponentProps, useMemo, useCallback, useState, ReactNode } from 'react';
import { Platform } from 'react-native';
import { Button } from '@universal/ui/button';
import { styled } from '@universal/ui/tailwind';
import type { TW } from '@universal/ui/tailwind';
import type { Text } from '@universal/ui/text';
import { MotiView } from 'moti';
import Animated, { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import * as NativeDropdownMenu from 'zeego/dropdown-menu';

const DropdownMenuRoot = NativeDropdownMenu.Root;

const DropdownMenuTrigger = NativeDropdownMenu.Trigger;

const DropdownMenuSub = NativeDropdownMenu.Sub;
// Todo: zeego issue on Android, have created a PR: https://github.com/nandorojo/zeego/pull/27, waiting for merge and release.
const DropdownMenuSubContent =
  Platform.OS === 'android' ? NativeDropdownMenu.Content : NativeDropdownMenu.SubContent;

const StyledDropdownMenuContent = styled(NativeDropdownMenu.Content);

const DropdownMenuContent = NativeDropdownMenu.create(
  ({ tw, ...props }: { tw?: TW } & ComponentProps<typeof NativeDropdownMenu.Content>) => (
    <StyledDropdownMenuContent {...props} tw={Array.isArray(tw) ? tw.join(' ') : tw} />
  ),
  'Content',
);

const DropdownItemFocusRing = ({
  isFocused,
}: {
  isFocused: Animated.SharedValue<boolean>;
}) => {
  // TODO moti should provide this
  const state = useDerivedValue(() => {
    return {
      opacity: isFocused.value ? 1 : 0,
    };
  }, [isFocused]);

  return (
    <MotiView
      animate={state}
      transition={useMemo(
        () => ({
          type: 'timing',
          duration: 150,
        }),
        [],
      )}
      pointerEvents='none'
    />
  );
};

const useFocusedItem = ({
  onFocus,
  onBlur,
}: {
  onFocus?: () => void;
  onBlur?: () => void;
}) => {
  const isFocused = useSharedValue(false);

  const handleFocus = useCallback(() => {
    isFocused.value = true;
    onFocus?.();
  }, [isFocused, onFocus]);

  const handleBlur = useCallback(() => {
    isFocused.value = false;
    onBlur?.();
  }, [isFocused, onBlur]);

  return {
    isFocused,
    handleFocus,
    handleBlur,
  };
};

const StyledDropdownMenuItem = styled(NativeDropdownMenu.Item);

const DropdownMenuItem = NativeDropdownMenu.create(
  ({
    tw,
    children,
    onBlur,
    onFocus,
    ...props
  }: { tw?: TW; className?: string } & ComponentProps<typeof NativeDropdownMenu.Item>) => {
    const { isFocused, handleBlur, handleFocus } = useFocusedItem({
      onFocus,
      onBlur,
    });

    return (
      <StyledDropdownMenuItem
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tw={Array.isArray(tw) ? tw.join(' ') : tw}
      >
        <DropdownItemFocusRing isFocused={isFocused} />
        {children}
      </StyledDropdownMenuItem>
    );
  },
  'Item',
);

const StyledDropdownMenuItemTitle = styled(NativeDropdownMenu.ItemTitle);

const DropdownMenuItemTitle = NativeDropdownMenu.create(
  ({
    tw,
    ...props
  }: { tw?: TW } & ComponentProps<typeof Text> &
    ComponentProps<typeof NativeDropdownMenu.ItemTitle>) => (
    <StyledDropdownMenuItemTitle {...props} tw={Array.isArray(tw) ? tw.join(' ') : tw}>
      {/* <Text {...props} /> */}
      {props.children}
    </StyledDropdownMenuItemTitle>
  ),
  'ItemTitle',
);

const StyledDropdownMenuSeparator = styled(NativeDropdownMenu.Separator);

const DropdownMenuSeparator = NativeDropdownMenu.create(
  ({ tw, ...props }: { tw?: TW } & ComponentProps<typeof NativeDropdownMenu.Separator>) => (
    <StyledDropdownMenuSeparator {...props} tw={Array.isArray(tw) ? tw.join(' ') : tw} />
  ),
  'Separator',
);

const StyledDropdownMenuSubTrigger = styled(NativeDropdownMenu.SubTrigger);

const DropdownMenuSubTrigger = NativeDropdownMenu.create(
  ({
    tw,
    children,
    onBlur,
    onFocus,
    ...props
  }: { tw?: TW } & ComponentProps<typeof NativeDropdownMenu.SubTrigger>) => {
    const { isFocused, handleBlur, handleFocus } = useFocusedItem({
      onFocus,
      onBlur,
    });

    return (
      <StyledDropdownMenuSubTrigger
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tw={Array.isArray(tw) ? tw.join(' ') : tw}
      >
        <DropdownItemFocusRing isFocused={isFocused} />
        {children}
      </StyledDropdownMenuSubTrigger>
    );
  },
  'SubTrigger',
);

interface IMenuItem {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
  selected: boolean;
  sub?: {
    label: string;
    icon: ReactNode;
    onPress?: () => void;
    selected: boolean;
  }[];
}

interface IDropdownMenuProps {
  triggerContent: ReactNode;
  items: Array<IMenuItem | 'separator'>;
}

const DropdownMenu = ({ triggerContent, items }: IDropdownMenuProps) => {
  const [, setIsOpen] = useState(false);
  return (
    <DropdownMenuRoot key='asd' onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Button>{triggerContent}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((option, index) => {
          if (option === 'separator') {
            return <DropdownMenuSeparator key={`separator-${index}`} />;
          }
          if (option.sub) {
            return (
              // @ts-ignore
              <DropdownMenuSub key={option.label}>
                <DropdownMenuSubTrigger key={option.label}>
                  {option.label}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {option.sub?.map((subOption) => (
                    <DropdownMenuItem onSelect={subOption.onPress} key={subOption.label}>
                      <DropdownMenuItemTitle>{subOption.label}</DropdownMenuItemTitle>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            );
          }
          return (
            <DropdownMenuItem key={option.label} onSelect={option.onPress}>
              <DropdownMenuItemTitle>{option.label}</DropdownMenuItemTitle>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export { DropdownMenu };
