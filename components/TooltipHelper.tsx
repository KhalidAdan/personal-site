import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipHelper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="mb-1">{title}</TooltipContent>
    </Tooltip>
  );
}
