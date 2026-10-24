import { Check } from "lucide-react";
import { heroDashboard } from "@/lib/content";

/** Illustrative ERPNext dashboard + workflow toast + Next.js customer portal, built in HTML/CSS. */
export default function HeroVisual() {
  const { kpis, bars, orders, portal } = heroDashboard;
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-window">
        <div className="hv-bar">
          <span className="sq on" />
          <span className="sq" />
          <span className="sq" />
          <span className="url">erp.yourcompany.com / app / selling</span>
        </div>
        <div className="hv-body">
          <div className="hv-side">
            <i /><i /><i /><i /><i />
          </div>
          <div className="hv-main">
            <div className="hv-head">
              <b>Selling dashboard</b>
              <span className="hv-chip">This month</span>
            </div>
            <div className="hv-kpis">
              {kpis.map((k) => (
                <div className="hv-kpi" key={k.label}>
                  <small>{k.label}</small>
                  <strong>{k.value}</strong>
                  <em>{k.delta}</em>
                </div>
              ))}
            </div>
            <div className="hv-chart">
              {bars.map((h, i) => (
                <span key={i} style={{ height: h + "%" }} />
              ))}
            </div>
            <div>
              {orders.map((o) => (
                <div className="hv-row" key={o.id}>
                  <b>{o.id}</b>
                  <span className="muted">{o.who}</span>
                  <span className={o.tag}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hv-toast">
        <span className="tick"><Check size={16} strokeWidth={3} /></span>
        <div>
          <b>Purchase order approved</b>
          <small>Custom workflow · just now</small>
        </div>
      </div>

      <div className="hv-portal">
        <header>
          <b>Your orders</b>
          <small>Customer portal</small>
        </header>
        <ul className="plain">
          {portal.map((p) => (
            <li key={p.item}>
              <span>{p.item}</span>
              <b>{p.state}</b>
            </li>
          ))}
        </ul>
        <div className="foot">
          <span className="btn btn-primary btn-block">Reorder</span>
        </div>
      </div>

      <span className="hv-note">Illustrative — your system, your data</span>
    </div>
  );
}
