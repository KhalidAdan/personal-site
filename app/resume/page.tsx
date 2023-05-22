import { TypographyMuted, TypographyP } from "@/components/Typography";

export default function Page() {
  return (
    <div>
      <ul>
        <li className="mb-6">
          <div className="flex justify-between pb-2 items-center">
            <TypographyP>Frontend Lead Software Developer, HP</TypographyP>
            <TypographyMuted>March 2022 - Present</TypographyMuted>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between pb-2 items-center">
            <TypographyP>Senior React developer, Deloitte</TypographyP>
            <TypographyMuted>November 2021 - March 2022</TypographyMuted>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between pb-2 items-center">
            <TypographyP>Fullstack software engineer, Gadget</TypographyP>
            <TypographyMuted>October 2020 - October 2021</TypographyMuted>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between pb-2 items-center">
            <TypographyP>Canada</TypographyP>
            <TypographyMuted>October 2020 - October 2021</TypographyMuted>
          </div>
        </li>
      </ul>
    </div>
  );
}
