import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

/** Turso client, or null when TURSO_* env isn't set. */
export function db(): Client | null {
  const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = process.env;
  if (!TURSO_DATABASE_URL) return null;
  client ??= createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });
  return client;
}

// ponytail: table created on first write; switch to real migrations when there's a second table.
const ENQUIRIES_TABLE = `CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  needs TEXT,
  on_erpnext TEXT,
  timeline TEXT,
  message TEXT
)`;

export type Enquiry = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  needs?: string[];
  onErpnext?: string;
  timeline?: string;
  message?: string;
};

/** Returns false when the DB isn't configured. */
export async function saveEnquiry(e: Enquiry): Promise<boolean> {
  const c = db();
  if (!c) return false;
  await c.batch(
    [
      ENQUIRIES_TABLE,
      {
        sql: `INSERT INTO enquiries (name, email, company, phone, needs, on_erpnext, timeline, message)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          e.name,
          e.email,
          e.company ?? null,
          e.phone ?? null,
          e.needs?.length ? e.needs.join(", ") : null,
          e.onErpnext ?? null,
          e.timeline ?? null,
          e.message ?? null,
        ],
      },
    ],
    "write",
  );
  return true;
}
