// src/components/HotelDetail.jsx
import { useState, useEffect } from "react";
import { C, F } from "../utils/theme.js";
import { Badge, SLabel, CopyBtn, StatBox, WABox, InfoRow, Chip, Divider } from "./UI.jsx";

const TABS = [
  { id: "overview",   label: "Genel Bakış" },
  { id: "rooms",      label: "Oda & Olanaklar" },
  { id: "food",       label: "Restoranlar" },
  { id: "sales",      label: "Satış Scriptleri" },
  { id: "objections", label: "İtirazlar" },
  { id: "whatsapp",   label: "WhatsApp" },
];

const WA_TYPES = [
  { key: "general",      icon: "📢", label: "Genel Tanıtım" },
  { key: "honeymoon",    icon: "💑", label: "Balayı" },
  { key: "family",       icon: "👨‍👩‍👧", label: "Aile" },
  { key: "priceRequest", icon: "📊", label: "Fiyat İsteme" },
  { key: "transfer",     icon: "🚐", label: "Transfer" },
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

/** Herhangi bir değeri güvenle string'e çevirir */
function toStr(val) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return "";
}

/**
 * STRING primitive dizisi beklendiğinde kullan.
 * Array<string|number> → string[]
 * string              → [string]
 * diğer               → []
 */
function toStrArr(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.map(toStr).filter(Boolean);
  if (typeof val === "string" && val.trim()) return [val.trim()];
  return [];
}

/**
 * OBJECT dizisi beklendiğinde kullan (roomTypes, restaurants, objections).
 * Array  → aynı array (içeriği dokunmadan)
 * object → Object.values()
 * diğer  → []
 */
function toArr(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === "object") return Object.values(val);
  return [];
}

/**
 * join() için güvenli sarmalayıcı.
 * Array ise join, string ise direkt döner, boşsa fallback.
 */
function safeJoin(val, separator, fallback) {
  const sep = separator ?? ", ";
  const fb  = fallback  ?? "Bilgi yok";
  if (!val) return fb;
  if (Array.isArray(val)) {
    const joined = val.map(toStr).filter(Boolean).join(sep);
    return joined || fb;
  }
  if (typeof val === "string") return val.trim() || fb;
  return fb;
}

/** null/undefined → fallback */
function safe(val, fallback) {
  const fb = fallback ?? "Bilgi yok";
  if (val == null || val === "") return fb;
  return String(val);
}

/** oda m² — sizeSqm / size / size_m2 */
function getRoomSize(room) {
  const raw = room?.sizeSqm ?? room?.size ?? room?.size_m2;
  if (raw == null || raw === "") return "Bilgi yok";
  return `${raw} m²`;
}

/** extraCharge veya extra_charge */
function isExtraCharge(r) {
  return r?.extraCharge === true || r?.extra_charge === true;
}

/** aquapark kaydırak sayısı */
function getSlidesLabel(slides) {
  if (typeof slides === "number" && slides > 0) return `${slides} kaydırak`;
  return "Bilgi yok";
}

// ── SUBCOMPONENTS ────────────────────────────────────────────────────────────

function RoomCard({ r }) {
  if (!r || typeof r !== "object") return null;
  return (
    <div style={{
      padding: "11px 14px", background: C.surface2, borderRadius: 9,
      border: `1px solid ${C.border}`, marginBottom: 8,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: F.head }}>
          {toStr(r.name) || "—"}
        </span>
        <span style={{ fontSize: 12, color: C.cyan, fontFamily: F.body, flexShrink: 0, marginLeft: 8 }}>
          {getRoomSize(r)}
        </span>
      </div>
      {r.maxCapacity && (
        <div style={{ fontSize: 11, color: C.textSub, fontFamily: F.body, marginBottom: 3 }}>
          👥 Kapasite: {r.maxCapacity}
        </div>
      )}
      <div style={{ fontSize: 12, color: C.textSub, fontFamily: F.body }}>
        🪟 {toStr(r.view) || "Bilgi yok"}
      </div>
      {Array.isArray(r.features) && r.features.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
          {r.features.map((f, fi) => (
            <span key={fi} style={{
              fontSize: 10, color: C.textSub, background: C.surface,
              padding: "2px 7px", borderRadius: 99,
              border: `1px solid ${C.border}`, fontFamily: F.body,
            }}>
              {toStr(f)}
            </span>
          ))}
        </div>
      )}
      {r.section && (
        <div style={{ marginTop: 5, fontSize: 10, color: C.gold, fontFamily: F.body, fontWeight: 600 }}>
          📍 {r.section}
        </div>
      )}
      {r.note && (
        <div style={{ fontSize: 11, color: C.gold, marginTop: 4, fontFamily: F.body }}>
          ★ {r.note}
        </div>
      )}
    </div>
  );
}

function ObjectionCard({ o, i }) {
  // o: string veya { q, a } veya { question, answer }
  const q = typeof o === "string"
    ? o
    : toStr(o?.q || o?.question || o?.soru);
  const a = typeof o === "string"
    ? ""
    : toStr(o?.a || o?.answer || o?.cevap);
  return (
    <div style={{
      marginBottom: 12, background: C.surface2,
      borderRadius: 9, border: `1px solid ${C.border}`, overflow: "hidden",
    }}>
      <div style={{
        padding: "9px 14px", background: "rgba(56,189,248,0.05)",
        borderBottom: `1px solid ${C.border}`, fontSize: 13,
        fontWeight: 600, color: C.cyan, fontFamily: F.body,
      }}>
        ❓ {q || "—"}
      </div>
      {a && (
        <div style={{
          padding: "10px 14px", fontSize: 13, color: C.text,
          lineHeight: 1.65, fontFamily: F.body,
        }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export function HotelDetail({ hotel, onClose }) {
  const [tab, setTab]       = useState("overview");
  const [waType, setWaType] = useState("general");

  const handleClose = typeof onClose === "function" ? onClose : () => {};

  useEffect(() => {
    setTab("overview");
    setWaType("general");
    const esc = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [hotel?.id]);

  if (!hotel) return null;

  const currentWA       = toStr(hotel.whatsappTemplates?.[waType]);
  const hasAquapark     = hotel.aquapark?.has === true;
  const hasKidsClub     = hotel.kidsClub?.has === true;
  const isAdultOnly     = hotel.adultOnly?.is === true;
  const ageLimitLabel   = hotel.adultOnly?.ageLimit != null ? `${hotel.adultOnly.ageLimit}+` : null;

  // competitorDiff: string veya array — her ikisini string[] olarak al
  const competitorLines = toStrArr(hotel.competitorDiff);

  // object dizileri — toArr kullan, içlerini bozmadan tut
  const roomTypes   = toArr(hotel.roomTypes);
  const restaurants = toArr(hotel.restaurants);
  const objections  = toArr(hotel.objections);

  // string dizileri — toStrArr kullan
  const strengths      = toStrArr(hotel.strengths);
  const importantNotes = toStrArr(hotel.importantNotes);
  const badges         = toStrArr(hotel.badges);
  const keyPoints      = toStrArr(hotel.salesScript?.keyPoints);
  const activities     = toStrArr(hotel.kidsClub?.activities);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(4,8,18,.72)",
          zIndex: 200, backdropFilter: "blur(4px)",
          animation: "fadeIn .15s",
        }}
      />

      {/* Panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: 700,
        background: C.surface, borderLeft: `1px solid ${C.border2}`,
        zIndex: 201, display: "flex", flexDirection: "column",
        animation: "slideR .22s cubic-bezier(.16,1,.3,1)",
      }}>

        {/* ── HEADER ── */}
        <div style={{ flexShrink: 0, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ padding: "16px 22px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 10, color: C.textDim, letterSpacing: 2,
                marginBottom: 3, fontFamily: F.body, fontWeight: 600,
              }}>
                {toStr(hotel.region).toUpperCase()}
              </div>
              <div style={{
                fontSize: 19, fontWeight: 700, color: C.text,
                fontFamily: F.head, lineHeight: 1.2, marginBottom: 7,
              }}>
                {toStr(hotel.name) || "Otel"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {badges.map((b) => <Badge key={b} type={b} />)}
                <span style={{
                  fontSize: 10, color: C.cyan, background: C.cyanDim,
                  padding: "2px 8px", borderRadius: 99,
                  border: `1px solid ${C.cyan}44`, fontWeight: 600, fontFamily: F.body,
                }}>
                  {toStr(hotel.concept)}
                </span>
                {isAdultOnly && ageLimitLabel && (
                  <span style={{
                    fontSize: 10, color: C.red, background: C.redDim,
                    padding: "2px 8px", borderRadius: 99,
                    border: `1px solid ${C.red}44`, fontWeight: 600, fontFamily: F.body,
                  }}>
                    🔞 {ageLimitLabel} Only
                  </span>
                )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
              <CopyBtn text={currentWA} label="WhatsApp Kopyala" small />
              <button
                onClick={handleClose}
                style={{
                  width: 32, height: 32, borderRadius: 7,
                  border: `1px solid ${C.border2}`, background: "transparent",
                  color: C.textSub, fontSize: 18, display: "flex",
                  alignItems: "center", justifyContent: "center", transition: "all .15s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = C.red; e.currentTarget.style.color = C.red; }}
                onMouseOut={(e)  => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.color = C.textSub; }}
              >×</button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", padding: "8px 22px 0", gap: 0, overflowX: "auto" }}>
            {TABS.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: "7px 14px", background: "transparent", border: "none",
                color: tab === t.id ? C.cyan : C.textSub,
                borderBottom: `2px solid ${tab === t.id ? C.cyan : "transparent"}`,
                cursor: "pointer", fontSize: 12, fontWeight: 600,
                fontFamily: F.body, transition: "all .12s", whiteSpace: "nowrap",
              }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px 36px" }}>

          {/* ════ GENEL BAKIŞ ════ */}
          {tab === "overview" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 18 }}>
                <StatBox label="Aquapark"     icon="🌊" value={hasAquapark ? "✓ Var" : "✗ Yok"}                          color={hasAquapark  ? C.green : C.red}    />
                <StatBox label="Çocuk Kulübü" icon="👧" value={hasKidsClub ? toStr(hotel.kidsClub?.ageRange) || "Var" : "Yok"} color={hasKidsClub  ? C.green : C.textDim}/>
                <StatBox label="Adult Only"   icon="🔞" value={isAdultOnly ? ageLimitLabel ?? "Evet" : "Hayır"}           color={isAdultOnly  ? C.red   : C.textDim}/>
                <StatBox label="Özel Plaj"    icon="🏖" value={hotel.beach?.hasPrivate ? "✓ Var" : "Yok"}                 color={hotel.beach?.hasPrivate ? C.green : C.textDim}/>
                <StatBox label="Snorkeling"   icon="🐠" value={hotel.beach?.snorkeling ? "✓ Dahil" : "Yok"}              color={hotel.beach?.snorkeling ? C.gold  : C.textDim}/>
                <StatBox label="Transfer"     icon="🚐" value={safe(hotel.transfer?.duration)}                            color={C.cyan}/>
              </div>

              {strengths.length > 0 && (
                <>
                  <SLabel>💪 Güçlü Yönler</SLabel>
                  <div style={{ marginBottom: 16 }}>
                    {strengths.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                        <span style={{ color: C.cyan, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
                        <span style={{ fontSize: 13, color: C.text, lineHeight: 1.55, fontFamily: F.body }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* competitorDiff: string ise tek blok, array ise liste */}
              {competitorLines.length > 0 && (
                <>
                  <SLabel>⚔️ Rakiplerinden Farkı</SLabel>
                  <div style={{ marginBottom: 16 }}>
                    {competitorLines.map((d, i) => (
                      <div key={i} style={{
                        fontSize: 12, color: C.textSub, padding: "7px 11px",
                        background: C.goldDim, border: `1px solid ${C.gold}22`,
                        borderRadius: 7, marginBottom: 5, fontFamily: F.body, lineHeight: 1.5,
                      }}>
                        ⚡ {d}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <SLabel>🎯 Hedef Müşteri</SLabel>
              <div style={{
                padding: "10px 14px", background: C.cyanDim,
                border: `1px solid ${C.cyan}22`, borderRadius: 9,
                marginBottom: 16, fontSize: 13, color: C.text, fontFamily: F.body,
              }}>
                {toStr(hotel.targetCustomer) || "Bilgi yok"}
              </div>

              <SLabel>🏖 Plaj & Deniz</SLabel>
              <div style={{
                background: C.surface2, borderRadius: 9, padding: "2px 14px",
                border: `1px solid ${C.border}`, marginBottom: 16,
              }}>
                <InfoRow label="Plaj Tipi"   value={safe(hotel.beach?.type)} />
                <InfoRow label="Şezlong"     value={safe(hotel.beach?.sunbeds)} />
                <InfoRow label="Snorkeling"  value={hotel.beach?.snorkeling ? "✓ Ekipman Dahil" : "Yok"} valueColor={hotel.beach?.snorkeling ? C.green : C.textDim} />
                <InfoRow label="Su Sporları" value={safe(hotel.beach?.waterSportsNote)} last />
              </div>

              {importantNotes.length > 0 && (
                <>
                  <SLabel>⚠️ Önemli Notlar</SLabel>
                  {importantNotes.map((n, i) => (
                    <div key={i} style={{
                      fontSize: 12, color: C.textSub, padding: "6px 11px",
                      background: `rgba(212,175,55,0.05)`, border: `1px solid ${C.gold}22`,
                      borderRadius: 7, marginBottom: 5, fontFamily: F.body,
                    }}>
                      {n}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {/* ════ ODALAR ════ */}
          {tab === "rooms" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>🛏 Oda Tipleri</SLabel>
              {roomTypes.length === 0 && (
                <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.body, marginBottom: 12 }}>Bilgi yok</div>
              )}
              {roomTypes.map((r, i) => <RoomCard key={i} r={r} />)}

              <Divider my={20} />

              <SLabel>🌊 Aquapark & Havuz</SLabel>
              <div style={{
                background: C.surface2, borderRadius: 9, padding: "2px 14px",
                border: `1px solid ${C.border}`, marginBottom: 16,
              }}>
                <InfoRow label="Aquapark" value={hasAquapark ? "✓ Var" : "✗ Yok"} valueColor={hasAquapark ? C.green : C.red} />
                {hasAquapark && (<>
                  <InfoRow label="Ad"       value={safe(hotel.aquapark?.name)} />
                  <InfoRow label="Saatler"  value={safe(hotel.aquapark?.hours)} />
                  <InfoRow label="Dahil mi" value={hotel.aquapark?.included ? "✓ Ücretsiz" : "Ücretli"} valueColor={hotel.aquapark?.included ? C.green : C.amber} />
                  <InfoRow label="Kaydırak" value={getSlidesLabel(hotel.aquapark?.slides)} valueColor={C.cyan} />
                </>)}
                <InfoRow label="Not" value={safe(hotel.aquapark?.note, "—")} last />
              </div>

              {hasKidsClub && (
                <>
                  <SLabel>👧 {toStr(hotel.kidsClub?.name) || "Çocuk Kulübü"}</SLabel>
                  <div style={{
                    background: C.surface2, borderRadius: 9, padding: "2px 14px",
                    border: `1px solid ${C.border}`, marginBottom: 10,
                  }}>
                    <InfoRow label="Yaş"     value={safe(hotel.kidsClub?.ageRange)} valueColor={C.green} />
                    <InfoRow label="Saatler" value={safe(hotel.kidsClub?.hours)} />
                    <InfoRow label="Ücret"   value={safe(hotel.kidsClub?.price)} valueColor={C.green} last />
                  </div>
                  {activities.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                      {activities.map((a, ai) => (
                        <span key={ai} style={{
                          fontSize: 11, color: C.cyan, background: C.cyanDim,
                          padding: "2px 8px", borderRadius: 99,
                          border: `1px solid ${C.cyan}33`, fontFamily: F.body,
                        }}>
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}

              {hotel.adultOnly?.note && (
                <div style={{
                  padding: isAdultOnly ? "12px 14px" : "10px 14px",
                  background: isAdultOnly ? C.redDim : C.surface2,
                  border: `1px solid ${isAdultOnly ? C.red + "44" : C.border}`,
                  borderRadius: 9, fontSize: isAdultOnly ? 13 : 12,
                  color: isAdultOnly ? C.red : C.textSub, fontFamily: F.body,
                }}>
                  {isAdultOnly ? "🔞 " : "ℹ️ "}{hotel.adultOnly.note}
                  {isAdultOnly && ageLimitLabel && (
                    <span style={{ marginLeft: 6, fontWeight: 700 }}>({ageLimitLabel} Only)</span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ════ RESTORANLAR ════ */}
          {tab === "food" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>🍽 Restoranlar & Barlar</SLabel>
              {restaurants.length === 0 && (
                <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.body, marginBottom: 12 }}>Bilgi yok</div>
              )}
              {restaurants.map((r, i) => {
                if (!r || typeof r !== "object") return null;
                const charged = isExtraCharge(r);
                return (
                  <div key={i} style={{
                    padding: "11px 14px", background: C.surface2, borderRadius: 9,
                    border: `1px solid ${charged ? C.amber + "55" : C.border}`, marginBottom: 8,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: F.head }}>
                        {toStr(r.name) || "—"}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                        {charged ? (
                          <span style={{ fontSize: 10, color: C.amber, background: C.amberDim, padding: "1px 7px", borderRadius: 99, border: `1px solid ${C.amber}44`, fontFamily: F.body, fontWeight: 600 }}>
                            💰 {toStr(r.priceNote) || "Ekstra Ücretli"}
                          </span>
                        ) : (
                          <span style={{ fontSize: 10, color: C.green, background: C.greenDim, padding: "1px 7px", borderRadius: 99, border: `1px solid ${C.green}44`, fontFamily: F.body, fontWeight: 600 }}>
                            ✓ Dahil
                          </span>
                        )}
                        {r.hours && r.hours !== "Bilgi yok" && (
                          <span style={{ fontSize: 11, color: C.textDim, fontFamily: F.body }}>{r.hours}</span>
                        )}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: C.textSub, fontFamily: F.body }}>
                      {toStr(r.cuisine) || "—"}
                      {r.note && <span style={{ color: C.amber }}> · ⚠️ {r.note}</span>}
                    </div>
                  </div>
                );
              })}

              <Divider my={20} />

              <SLabel>🚐 Transfer Bilgisi</SLabel>
              <div style={{
                background: C.surface2, borderRadius: 9, padding: "2px 14px",
                border: `1px solid ${C.border}`,
              }}>
                <InfoRow label="Havalimanı"    value={safe(hotel.transfer?.airport)} />
                <InfoRow label="Süre"          value={safe(hotel.transfer?.duration)} valueColor={C.cyan} />
                <InfoRow label="Tahmini Fiyat" value={safe(hotel.transfer?.approxPrice)} />
                <InfoRow label="Seçenekler"    value={safeJoin(hotel.transfer?.options)} last />
              </div>
              {hotel.transfer?.note && (
                <div style={{
                  fontSize: 11, color: C.gold, marginTop: 8, fontFamily: F.body,
                  padding: "6px 11px", background: C.goldDim, borderRadius: 7,
                }}>
                  💡 {hotel.transfer.note}
                </div>
              )}
            </div>
          )}

          {/* ════ SATIŞ SCRİPTLERİ ════ */}
          {tab === "sales" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>🗣 Açılış Cümlesi</SLabel>
              <div style={{
                padding: "12px 14px", background: C.cyanDim,
                border: `1px solid ${C.cyan}22`, borderRadius: 9,
                marginBottom: 16, fontSize: 13, color: C.text,
                fontFamily: F.body, lineHeight: 1.65, fontStyle: "italic",
              }}>
                "{toStr(hotel.salesScript?.opening) || "—"}"
              </div>

              <SLabel>✅ Anahtar Satış Noktaları</SLabel>
              <div style={{ marginBottom: 16 }}>
                {keyPoints.length === 0 && (
                  <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.body }}>Bilgi yok</div>
                )}
                {keyPoints.map((p, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 8, padding: "7px 11px",
                    background: C.greenDim, border: `1px solid ${C.green}22`,
                    borderRadius: 7, marginBottom: 5, alignItems: "flex-start",
                  }}>
                    <span style={{ color: C.green, flexShrink: 0, fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: 13, color: C.text, fontFamily: F.body }}>{p}</span>
                  </div>
                ))}
              </div>

              {hotel.honeymoonSalesScript && (
                <>
                  <SLabel>💑 Balayı Satış Dili</SLabel>
                  <div style={{
                    padding: "12px 14px", background: C.pinkDim ?? C.redDim,
                    border: `1px solid ${(C.pink ?? C.red)}22`, borderRadius: 9,
                    marginBottom: 16, fontSize: 13, color: C.text,
                    fontFamily: F.body, lineHeight: 1.7, whiteSpace: "pre-line",
                  }}>
                    {hotel.honeymoonSalesScript}
                  </div>
                </>
              )}

              {hotel.familySalesScript && (
                <>
                  <SLabel>👨‍👩‍👧 Aile Satış Dili</SLabel>
                  <div style={{
                    padding: "12px 14px", background: C.greenDim,
                    border: `1px solid ${C.green}22`, borderRadius: 9,
                    marginBottom: 16, fontSize: 13, color: C.text,
                    fontFamily: F.body, lineHeight: 1.7, whiteSpace: "pre-line",
                  }}>
                    {hotel.familySalesScript}
                  </div>
                </>
              )}

              {hotel.salesScript?.closing && (
                <div style={{
                  padding: "10px 14px", background: C.goldDim,
                  border: `1px solid ${C.gold}22`, borderRadius: 9,
                  fontSize: 12, color: C.gold, fontFamily: F.body, fontStyle: "italic",
                }}>
                  🎯 Kapanış: "{hotel.salesScript.closing}"
                </div>
              )}
            </div>
          )}

          {/* ════ İTİRAZLAR ════ */}
          {tab === "objections" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>💬 İtiraz Cevapları</SLabel>
              {objections.length === 0 && (
                <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.body }}>Bilgi yok</div>
              )}
              {objections.map((o, i) => <ObjectionCard key={i} o={o} i={i} />)}
            </div>
          )}

          {/* ════ WHATSAPP ════ */}
          {tab === "whatsapp" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {WA_TYPES.map((t) => (
                  <button key={t.key} onClick={() => setWaType(t.key)} style={{
                    padding: "6px 13px", borderRadius: 7, fontSize: 11, fontWeight: 600,
                    border: `1px solid ${waType === t.key ? C.cyan : C.border2}`,
                    background: waType === t.key ? C.cyanDim : "transparent",
                    color: waType === t.key ? C.cyan : C.textSub,
                    fontFamily: F.body, transition: "all .12s",
                  }}>
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>
              {currentWA ? (
                <>
                  <WABox text={currentWA} />
                  <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                    <CopyBtn text={currentWA} label="WhatsApp'a Kopyala" />
                  </div>
                </>
              ) : (
                <div style={{
                  padding: "18px", background: C.surface2,
                  borderRadius: 9, border: `1px solid ${C.border}`,
                  fontSize: 13, color: C.textDim, fontFamily: F.body, textAlign: "center",
                }}>
                  Bu şablon için içerik bulunmuyor.
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
