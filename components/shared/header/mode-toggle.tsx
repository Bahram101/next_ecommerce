"use client";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        d
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ModeToggle;
