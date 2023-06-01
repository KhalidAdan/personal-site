import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function Email({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            User: {name} at email: {email} reached out via your contact page!
          </Text>
          <Text style={paragraph}>{message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
