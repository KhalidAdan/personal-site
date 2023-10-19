import ContactEmail from "@/emails";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

export async function POST(req: Request) {
  console.log("INSIDE ROUTE");
  const token = process.env.POSTMARK_API_TOKEN;

  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({
      status: 500,
      message: "Missing required fields",
    });
  }

  console.log("Sending email to", email);

  const client = new ServerClient(token);

  await client
    .sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL_ADDRESS,
      To: email,
      Subject: "A new message from khld.dev",
      HtmlBody: render(
        ContactEmail({
          name: name,
          email: email,
          message: message,
        })
      ),
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.json({ status: 500, message: err });
    });

  return NextResponse.json({ status: 200, message: "Email sent" });
}
