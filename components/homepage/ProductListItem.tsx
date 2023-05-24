import Link from "next/link";
import { TypographyMuted, TypographyP } from "../Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Product } from "./ProductsList";

export default function ProductListItem({
  name,
  description,
  image,
  href,
}: Product) {
  return (
    <Link
      className="flex gap-3 items-center -mx-3 px-3 py-3 hover:bg-light/5 rounded-xl cursor-pointer"
      href={href}
      target="_blank"
    >
      <div>
        <Avatar className="h-10 w-10">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-accent-gray ">{name}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <TypographyP>{name}</TypographyP>
        <TypographyMuted>{description}</TypographyMuted>
      </div>
    </Link>
  );
}
