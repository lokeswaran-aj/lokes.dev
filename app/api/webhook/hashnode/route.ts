import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Verify the webhook signature from Hashnode
function verifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export async function POST(request: NextRequest) {
  const secret = process.env.HASHNODE_WEBHOOK_SECRET;

  if (!secret) {
    console.error("[Webhook] Missing HASHNODE_WEBHOOK_SECRET");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  try {
    // Get the raw body for signature verification
    const payload = await request.text();
    const signature = request.headers.get("x-hashnode-signature") || "";

    // Verify signature
    if (signature && !verifySignature(payload, signature, secret)) {
      console.error("[Webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Parse the payload
    const data = JSON.parse(payload);
    console.log("[Webhook] Received event:", data?.metadata?.event);

    // Clear the in-memory cache by calling a special endpoint
    // We'll do this by making the cache timestamp invalid
    const baseUrl = request.nextUrl.origin;
    await fetch(`${baseUrl}/api/rss?invalidate=true`, { method: "POST" });

    // Revalidate the blog page
    revalidatePath("/blog");

    console.log("[Webhook] Cache invalidated and /blog revalidated");

    return NextResponse.json({
      success: true,
      message: "Cache invalidated",
      event: data?.metadata?.event,
    });
  } catch (error) {
    console.error("[Webhook] Error processing webhook:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

// Health check for the webhook endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Hashnode webhook endpoint is active",
  });
}

