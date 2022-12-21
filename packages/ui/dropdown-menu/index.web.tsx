import { ReactNode, useState } from 'react';
import * as RxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '@universal/ui/button';
import { AppIcons } from '@universal/ui/icons';
import { Text } from '@universal/ui/text';
import { View } from '@universal/ui/view';

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

interface IDropdownMenuItemProps extends IMenuItem {
  className?: string;
}

const DropdownMenuItem = ({
  icon,
  label,
  className,
  selected,
  onPress,
}: IDropdownMenuItemProps) => {
  return (
    <RxDropdownMenu.Item
      disabled={selected}
      onClick={onPress}
      className={`
        flex
        cursor-default
        select-none
        items-center
        justify-between
        rounded-md
        px-2
        py-2
        text-xs
        text-gray-400
        outline-none
        focus:bg-gray-50
        dark:text-gray-500
        dark:focus:bg-gray-900
        ${className}
      `}
    >
      <Text className='text-gray-300'>{label}</Text>
      {icon}
    </RxDropdownMenu.Item>
  );
};

const DropdownMenuSubItem = ({ icon, label, className, sub }: IDropdownMenuItemProps) => {
  return (
    <RxDropdownMenu.Sub>
      <RxDropdownMenu.SubTrigger
        className={`
          flex
          cursor-default
          select-none
          flex-row
          items-center
          justify-between
          rounded-md
          px-2
          py-2
          text-xs
          text-gray-400
          outline-none
          focus:bg-gray-50
          dark:text-gray-500
          dark:focus:bg-gray-900
        `}
      >
        <View className='flex-row items-center'>
          <AppIcons name='chevron-down' className='rotate-90' color='white' size='sm' />
          <Text className='font-roboto text-gray-300'>{label}</Text>
        </View>
        {icon}
      </RxDropdownMenu.SubTrigger>
      <RxDropdownMenu.Portal>
        <RxDropdownMenu.SubContent
          className={`
            origin-radix-dropdown-menu
            radix-side-right:animate-scale-in
            radix-side-left:animate-scale-in
            w-[200px]
            rounded-lg
            bg-gray-700
            px-1
            py-1
            text-xs
            shadow-md
          `}
        >
          {sub?.map((option) => (
            <RxDropdownMenu.Item
              onClick={option.onPress}
              key={`${label}-${option.label}`}
              className={`
                group
                flex
                cursor-default
                select-none
                flex-row
                items-center
                justify-between
                rounded-md
                px-2
                py-2
                text-xs
                text-gray-400
                outline-none
                focus:bg-gray-50
                dark:text-gray-500
                dark:focus:bg-gray-900
                ${className}
              `}
            >
              <Text className='font-roboto text-gray-300'>{option.label}</Text>
              {option.icon}
            </RxDropdownMenu.Item>
          ))}
        </RxDropdownMenu.SubContent>
      </RxDropdownMenu.Portal>
    </RxDropdownMenu.Sub>
  );
};

const DropdownMenu = ({ triggerContent, items }: IDropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <RxDropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <RxDropdownMenu.Trigger>
        <Button className='!m-0 h-10 w-10 rounded-full !p-0 outline-none'>
          {triggerContent}
        </Button>
      </RxDropdownMenu.Trigger>
      <RxDropdownMenu.Portal>
        <RxDropdownMenu.Content
          align='end'
          className={`
            radix-side-top:animate-slide-up
            radix-side-bottom:animate-slide-down
            w-52
            rounded-lg
            bg-gray-700
            px-1.5
            py-1
            shadow-md
            will-change-transform
          `}
          sideOffset={5}
        >
          {items.map((option, index) => {
            if (option === 'separator') {
              return (
                <RxDropdownMenu.Separator
                  key={`separator-${index}`}
                  className='my-1 h-px bg-gray-200 dark:bg-gray-500'
                />
              );
            }
            return option.sub ? (
              <DropdownMenuSubItem key={`${option.label}`} {...option} />
            ) : (
              <DropdownMenuItem key={`${option.label}`} {...option} />
            );
          })}
          <RxDropdownMenu.Arrow className='fill-gray-700' />
        </RxDropdownMenu.Content>
      </RxDropdownMenu.Portal>
    </RxDropdownMenu.Root>
  );
};

export { DropdownMenu };
