import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site, socialBanner } from "@/lib/content";

export const alt = `${site.name} — ${socialBanner.title} & ${socialBanner.accent} ${socialBanner.extra}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (f: string) => readFile(join(process.cwd(), "assets/og", f));

/** Link-preview banner: copy from lib/content, network artwork from the original designed banner. */
export default async function Image() {
  const [art, regular, bold] = await Promise.all([asset("network.jpg"), asset("archivo-400.woff"), asset("archivo-800.woff")]);
  const artSrc = "data:image/jpeg;base64," + art.toString("base64");

  return new ImageResponse(
    (
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", fontFamily: "Archivo" }}>
        {/* the original designed banner (card border + network art); its old text is covered below */}
        <img src={artSrc} width={1200} height={630} style={{ position: "absolute", top: 0, left: 0 }} />
        <div
          style={{
            position: "absolute", top: 50, left: 28, width: 860, height: 527, borderRadius: 14,
            background: "linear-gradient(to right, #07080b 82%, rgba(7,8,11,0))",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 400, color: "#fff" }}>
            <span style={{ color: "#2f7bff", fontWeight: 800 }}>Techy</span>Solutions
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: "#fff" }}>
            <span>{socialBanner.title}</span>
            <span style={{ display: "flex" }}>
              &amp;&nbsp;<span style={{ color: "#2f7bff" }}>{socialBanner.accent}</span>
            </span>
          </div>
          <div
            style={{
              display: "flex", alignSelf: "flex-start", padding: "10px 20px", borderRadius: 999,
              border: "1.5px solid rgba(47,123,255,0.7)", background: "rgba(47,123,255,0.14)",
              fontSize: 26, fontWeight: 800, color: "#fff",
            }}
          >
            {socialBanner.extra}
          </div>
          <div style={{ fontSize: 28, fontWeight: 400, color: "rgba(255,255,255,0.72)" }}>{socialBanner.tagline}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: regular, weight: 400, style: "normal" },
        { name: "Archivo", data: bold, weight: 800, style: "normal" },
      ],
    },
  );
}
