import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Veuillez remplir tous les champs.' }, { status: 400 });
    }

    console.log("USER:", process.env.EMAIL_USER);
    console.log("PASS existe ?:", !!process.env.EMAIL_PASS);
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: 'maelbouviersobrino@hotmail.com',
      subject: `Nouveau contact depuis le Portfolio - ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi de l'email. Vérifiez vos identifiants SMTP." }, 
      { status: 500 }
    );
  }
}

