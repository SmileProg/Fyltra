const Stripe = require("stripe");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  const { subscriptionId } = req.body || {};
  if (!subscriptionId) return res.status(400).json({ error: "subscriptionId required" });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    // Annulation à la fin de la période en cours
    const sub = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    const endsAt = sub.cancel_at
      ? new Date(sub.cancel_at * 1000).toISOString()
      : null;

    return res.status(200).json({ ok: true, endsAt });
  } catch (e) {
    console.error("cancel-subscription error:", e.message);
    return res.status(500).json({ error: e.message });
  }
};
