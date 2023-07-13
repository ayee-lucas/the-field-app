import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { MdLightbulbOutline } from 'react-icons/md';

export default function DarkModeDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="absolute bottom-16 right-3">
        <Button size="icon">
          <MdLightbulbOutline size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[999]">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}
