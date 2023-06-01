import ContactEmail from "@/emails";
import { env } from "@/env";
import { render } from "@react-email/render";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Client } from "postmark";

export async function POST(req: Request) {
  const token = env.POSTMARK_API_TOKEN;

  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({
      status: 500,
      message: "Missing required fields",
    });
  }

  const client = new Client(token);

  // cannot update the values for from and to until postmark tells me I'm verified
  const response = await client.sendEmail({
    From: "me@khld.dev",
    To: "khalid.adan@gmail.com",
    Subject: "A new message from khld.dev",
    HtmlBody: render(
      ContactEmail({
        name: name,
        email: email,
        message: message,
      })
    ),
  });

  if (response.ErrorCode) {
    return NextResponse.json({ status: 500, message: response.Message });
  }
  redirect(env.PUBLIC_CONTACT_URL);
}
