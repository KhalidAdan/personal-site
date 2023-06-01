import { Badge } from "@/components/ui/badge";

export default function BlogBadge({
  isNew,
  hasBeenReleased,
}: {
  isNew: boolean;
  hasBeenReleased: boolean;
}) {
  if (!hasBeenReleased) return <Badge variant="secondary">Unreleased</Badge>;

  if (isNew) return <Badge variant="success">New</Badge>;

  return null;
}
