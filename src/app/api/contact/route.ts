import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API Key
// In production, use process.env.RESEND_API_KEY
// For now, using a placeholder if not set, but it will fail to send if invalid.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, company, email, message } = await request.json();

        // 1. Send notification to Admin (NEVADO)
        const { error: adminError } = await resend.emails.send({
            from: "NEVADO Web <onboarding@resend.dev>", // Default Resend test sender
            to: ["paniagua.ian.de@gmail.com"],
            subject: `Nuevo Lead de ${name} (${company})`,
            html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        if (adminError) {
            console.error("Admin Email Error:", adminError);
            return NextResponse.json({ error: "Error sending admin email" }, { status: 500 });
        }

        // 2. Send Auto-reply to User
        const { error: replyError } = await resend.emails.send({
            from: "NEVADO <onboarding@resend.dev>",
            to: [email],
            subject: "Gracias por contactar a NEVADO",
            html: `
        <h1>Gracias por escribirnos, ${name}.</h1>
        <p>Hemos recibido su solicitud y nuestro equipo comercial se pondrá en contacto con usted a la brevedad.</p>
        <br />
        <p>Atentamente,</p>
        <p><strong>Equipo NEVADO</strong></p>
        <p>Av. Sinchi Roca Mz M lote 6 El Pedregal Jicamarca S.J.L</p>
      `,
        });

        if (replyError) {
            console.warn("Auto-reply Error:", replyError);
            // We don't fail the whole request if auto-reply fails, but good to know
        }

        return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
