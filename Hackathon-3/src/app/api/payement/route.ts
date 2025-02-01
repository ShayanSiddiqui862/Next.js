import { NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is missing from environment variables.");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // Fixed: Added API version
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received body:", body);

        const { product } = body;
        
        if (!product || !product.name || !product.price) {
            return NextResponse.json({ error: "Invalid request. Missing product details." }, { status: 400 });
        }

        const unitAmount = Math.round(product.price * 100);
        const origin = req.headers.get("origin") || "http://localhost:3000"; // Fallback

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: unitAmount,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${origin}/success`,
            cancel_url: `${origin}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Handle GET requests properly
export async function GET() {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
