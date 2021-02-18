import nodemailer from "nodemailer";

const emailPass = "Wowhund123!";

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  auth: {
    user: "mail@olivergraetz.com",
    pass: emailPass,
  },
});

export default async (req, res) => {
  const { email, number, name, message } = req.body;

  const mailerRes = await mailer({
    name,
    email,
    text: `Nachricht von ${name} <br>E-Mail: ${email} <br>Nummer: ${number} <br>Nachricht: ${message}`,
  });
  res.send(mailerRes);
};

const mailer = ({ name, text, email }) => {
  const message = {
    from: "mail@olivergraetz.com",
    to: "mail@olivergraetz.com",
    subject: `Von ${name ? name : email}`,
    html: text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
