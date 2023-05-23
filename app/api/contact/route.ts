import ContactEmail from "@/emails";
import { env } from "@/env";
import { render } from "@react-email/render";
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

  const response = await client.sendEmail({
    From: "admin@eto.news",
    To: "admin@eto.news",
    Subject: "A new message from khld.dev",
    HtmlBody: render(
      ContactEmail({
        name: name || "Khalid Adan",
        email: email || "khalid.adan@gmail.com",
        message: message || "Hello World",
      })
    ),
  });

  if (response.ErrorCode) {
    return NextResponse.json({ status: 500, message: response.Message });
  }
  return NextResponse.json({ status: 200, message: "Email sent successfully" });
}
