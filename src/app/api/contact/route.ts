import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Veuillez remplir tous les champs.' }, { status: 400 });
    }

    // Configuration du serveur SMTP (Par exemple Outlook/Hotmail)
    // Pour que cela fonctionne sur Vercel, vous devez ajouter EMAIL_USER et EMAIL_PASS 
    // dans les variables d'environnement (Settings > Environment Variables) sur Vercel.
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Serveur SMTP de Hotmail/Outlook (à changer si Gmail etc.)
      port: 587,
      secure: false, // false pour le port 587
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Obligatoire avec Outlook : l'expéditeur doit être votre email
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

