import type { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const message = req.body.message;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'abu.safiia2016@gmail.com',
                    pass: process.env.EMAIL_PASS,
                }
            });

            const autoresponderMailOptions = {
                from: 'abu.safiia2016@gmail.com',
                to: email,
                subject: 'Vielen Dank für Ihre Anfrage',
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Vielen Dank für Ihre Anfrage</title>
                </head>
                    <style>
                        body{
                            font-family:Arial,sans-serif
                            color:black;
                            font-site:14px
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                        }
                         h1{
                            font-size:18px;
                         }
                        h1,p{
                            flex:1 0 100%;
                            margin-bottom:10px;
                        }
                    </style>
                    <body>
                        <h1>Vielen Dank für Ihre Anfrage</h1>
                        <div>
                            <p>Hallo ${name},</p>
                            <p>Vielen Dank für Ihre Anfrage.</p>
                            <p>Ich werden mich so schnell wie möglich bei Ihnen melden</p>
                            <p>Mit freundlichen Grüßen,</p>
                            <p>Muslim Zamukaev</p>
                        </div>
                    </body>
                </html>
                `,
            };

            const mailOptions = {
                from: 'abu.safiia2016@gmail.com',
                to: 'abu.safiia2016@gmail.com', // Ändere dies zu deiner E-Mail-Adresse
                subject: 'Neue Kontaktanfrage',
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Neue Kontaktanfrage</title>
                </head>
                <style>
                    body{
                        font-family:Arial,sans-serif
                        color:black;
                        font-site:14px
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                    }
                    b{
                        margin-right:5px;
                    }
                    h1{
                        font-size:18px;
                    }
                    h1,p{
                        flex:1 0 100%;
                        margin-bottom:10px;
                    }
                </style>
                <body>
                    <h1>Neue Kontaktanfrage</h1>
                    <p><b>Name:</b>${name}</p>
                    <p><b>Email:</b><a href="${email}">${email}</a></p>
                    <p><b>Message:</b>${message}</p>
                </body>
                </html>
                `,
            };

            await transporter.sendMail(mailOptions, (error: Error, info: any) => {
                if (error) {
                    return res.json({ message: 'Fehler beim Senden der E-Mail' });
                } else {
                    return res.status(200).json({ message: 'E-Mail wurde erfolgreich gesendet' });
                }
            });

            await transporter.sendMail(autoresponderMailOptions, (error: Error, info: any) => {
                if (error) {
                    return res.json({ message: 'Fehler beim Senden der E-Mail' });
                } else {
                    return res.status(200).json({ message: 'E-Mail wurde erfolgreich gesendet' });
                }
            });

        } catch (error) {
            return res.status(500)
        }
    } else if (req.method === 'GET') {
        return res.send('it is work')
    }
}