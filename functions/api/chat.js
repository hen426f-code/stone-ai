// Cloudflare Pages Function — פרוקסי בטוח ל-Anthropic. המפתח סודי (ANTHROPIC_API_KEY).
// מוח הידע + כל המדריך יושבים כאן בשרת; הדפדפן שולח רק את ההודעות.
import { KNOWLEDGE, MANUAL } from "./_lib/knowledge.js";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

let MANUAL_TEXT = null;
function fullSystem() {
  if (MANUAL_TEXT === null) {
    let t = "";
    for (const [k, v] of Object.entries(MANUAL)) t += "\n\n### " + k + "\n" + v;
    MANUAL_TEXT = t;
  }
  return KNOWLEDGE +
    "\n\n=== מדריך המכונה המלא (33 פרקים). ענה מתוכו במדויק; אם רלוונטי ציין את שם הפרק. אם התשובה לא במדריך, אמור זאת ואל תמציא. ===\n" +
    MANUAL_TEXT;
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.ANTHROPIC_API_KEY)
      return json({ error: "missing_key", message: "המפתח לא הוגדר בשרת (ANTHROPIC_API_KEY)." }, 500);
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    if (!messages.length) return json({ error: "no_messages" }, 400);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: body.model || "claude-sonnet-4-6",
        max_tokens: Math.min(body.max_tokens || 1200, 2000),
        system: fullSystem(),
        messages,
      }),
    });
    const data = await r.json();
    if (!r.ok) return json({ error: "api_error", status: r.status, detail: data }, r.status);
    const text = (data.content || []).filter(x => x.type === "text").map(x => x.text).join("\n").trim();
    return json({ text });
  } catch (e) {
    return json({ error: "server_error", message: String((e && e.message) || e) }, 500);
  }
}
export function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", ...CORS } });
}
