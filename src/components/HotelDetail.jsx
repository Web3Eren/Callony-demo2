
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

// ── HELPERS ──────────────────────────────────────────────────

/** competitorDiff string veya array olabilir — ikisini de string[] döndürür */
function getCompetitorDiffLines(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean);
  if (typeof raw === "string" && raw.trim().length > 0) return [raw];
  return [];
}

/** oda boyutunu sizeSqm / size / size_m2 alanlarından güvenle okur */
function getRoomSize(room) {
  const raw = room?.sizeSqm ?? room?.size ?? room?.size_m2;
  if (raw == null || raw === "") return "Bilgi yok";
  return `${raw} m²`;
}

/** extraCharge veya extra_charge alanını okur */
function isExtraCharge(restaurant) {
  return restaurant?.extraCharge === true || restaurant?.extra_charge === true;
}

/** aquapark.slides güvenli render — number veya falsy */
function getSlidesLabel(slides) {
  if (typeof slides === "number" && slides > 0) return `${slides} kaydırak`;
  return "Bilgi yok";
}

/** null/undefined değeri "Bilgi yok" ile gösterir */
function safe(val, suffix = "") {
  if (val == null || val === "") return "Bilgi yok";
  return `${val}${suffix}`;
}

// ── COMPONENT ────────────────────────────────────────────────

export function HotelDetail({ hotel, onClose }) {
  const [tab, setTab]       = useState("overview");
  const [waType, setWaType] = useState("general");

  useEffect(() => {
    setTab("overview");
    setWaType("general");
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [hotel?.id]);

  if (!hotel) return null;

  const currentWA        = hotel.whatsappTemplates?.[waType] ?? "";
  const competitorLines  = getCompetitorDiffLines(hotel.competitorDiff);
  const hasAquapark      = hotel.aquapark?.has === true;
  const hasKidsClub      = hotel.kidsClub?.has === true;
  const isAdultOnly      = hotel.adultOnly?.is === true;
  const ageLimitLabel    = hotel.adultOnly?.ageLimit != null
    ? `${hotel.adultOnly.ageLimit}+`
    : null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
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

        {/* ── STICKY HEADER ── */}
        <div style={{ flexShrink: 0, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ padding: "16px 22px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 10, color: C.textDim, letterSpacing: 2,
                marginBottom: 3, fontFamily: F.body, fontWeight: 600,
              }}>
                {hotel.region?.toUpperCase() ?? ""}
              </div>
              <div style={{
                fontSize: 19, fontWeight: 700, color: C.text,
                fontFamily: F.head, lineHeight: 1.2, marginBottom: 7,
              }}>
                {hotel.name ?? "Otel"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {(hotel.badges ?? []).map((b) => <Badge key={b} type={b} />)}
                <span style={{
                  fontSize: 10, color: C.cyan, background: C.cyanDim,
                  padding: "2px 8px", borderRadius: 99,
                  border: `1px solid ${C.cyan}44`, fontWeight: 600, fontFamily: F.body,
                }}>
                  {hotel.concept ?? ""}
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
                onClick={onClose}
                style={{
                  width: 32, height: 32, borderRadius: 7,
                  border: `1px solid ${C.border2}`,
                  background: "transparent", color: C.textSub,
                  fontSize: 18, display: "flex", alignItems: "center",
                  justifyContent: "center", transition: "all .15s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = C.red; e.currentTarget.style.color = C.red; }}
                onMouseOut={(e)  => { e.currentTarget.style.borderColor = C.border2; e.currentTarget.style.color = C.textSub; }}
              >
                ×
              </button>
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
                <StatBox
                  label="Aquapark" icon="🌊"
                  value={hasAquapark ? "✓ Var" : "✗ Yok"}
                  color={hasAquapark ? C.green : C.red}
                />
                <StatBox
                  label="Çocuk Kulübü" icon="👧"
                  value={hasKidsClub ? (hotel.kidsClub?.ageRange ?? "Var") : "Yok"}
                  color={hasKidsClub ? C.green : C.textDim}
                />
                <StatBox
                  label="Adult Only" icon="🔞"
                  value={isAdultOnly ? (ageLimitLabel ?? "Evet") : "Hayır"}
                  color={isAdultOnly ? C.red : C.textDim}
                />
                <StatBox
                  label="Özel Plaj" icon="🏖"
                  value={hotel.beach?.hasPrivate ? "✓ Var" : "Yok"}
                  color={hotel.beach?.hasPrivate ? C.green : C.textDim}
                />
                <StatBox
                  label="Snorkeling" icon="🐠"
                  value={hotel.beach?.snorkeling ? "✓ Dahil" : "Yok"}
                  color={hotel.beach?.snorkeling ? C.gold : C.textDim}
                />
                <StatBox
                  label="Transfer" icon="🚐"
                  value={hotel.transfer?.duration ?? "Bilgi yok"}
                  color={C.cyan}
                />
              </div>

              {/* Güçlü yönler */}
              {(hotel.strengths?.length ?? 0) > 0 && (
                <>
                  <SLabel>💪 Güçlü Yönler</SLabel>
                  <div style={{ marginBottom: 16 }}>
                    {hotel.strengths.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start" }}>
                        <span style={{ color: C.cyan, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
                        <span style={{ fontSize: 13, color: C.text, lineHeight: 1.55, fontFamily: F.body }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Rakip farkı — FIX 1: string veya array desteklenir */}
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
                {hotel.targetCustomer ?? "Bilgi yok"}
              </div>

              <SLabel>🏖 Plaj & Deniz</SLabel>
              <div style={{
                background: C.surface2, borderRadius: 9, padding: "2px 14px",
                border: `1px solid ${C.border}`, marginBottom: 16,
              }}>
                <InfoRow label="Plaj Tipi"   value={hotel.beach?.type      ?? "Bilgi yok"} />
                <InfoRow label="Şezlong"     value={hotel.beach?.sunbeds   ?? "Bilgi yok"} />
                <InfoRow
                  label="Snorkeling"
                  value={hotel.beach?.snorkeling ? "✓ Ekipman Dahil" : "Yok"}
                  valueColor={hotel.beach?.snorkeling ? C.green : C.textDim}
                />
                <InfoRow
                  label="Su Sporları"
                  value={hotel.beach?.waterSportsNote ?? "Bilgi yok"}
                  last
                />
              </div>

              <SLabel>⚠️ Önemli Notlar</SLabel>
              {(hotel.importantNotes ?? []).map((n, i) => (
                <div key={i} style={{
                  fontSize: 12, color: C.textSub, padding: "6px 11px",
                  background: `rgba(212,175,55,0.05)`, border: `1px solid ${C.gold}22`,
                  borderRadius: 7, marginBottom: 5, fontFamily: F.body,
                }}>
                  {n}
                </div>
              ))}
            </div>
          )}

          {/* ════ ODALAR ════ */}
          {tab === "rooms" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>🛏 Oda Tipleri</SLabel>
              {(hotel.roomTypes ?? []).map((r, i) => (
                <div key={i} style={{
                  padding: "11px 14px", background: C.surface2, borderRadius: 9,
                  border: `1px solid ${C.border}`, marginBottom: 8,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: F.head }}>
                      {r.name ?? "—"}
                    </span>
                    {/* FIX 3: sizeSqm / size / size_m2 hepsini destekle */}
                    <span style={{ fontSize: 12, color: C.cyan, fontFamily: F.body, flexShrink: 0, marginLeft: 8 }}>
                      {getRoomSize(r)}
                    </span>
                  </div>
                  {/* maxCapacity */}
                  {r.maxCapacity && (
                    <div style={{ fontSize: 11, color: C.textSub, fontFamily: F.body, marginBottom: 3 }}>
                      👥 Kapasite: {r.maxCapacity}
                    </div>
                  )}
                  {/* view — "Bilgi yok" zaten datada var, güvenle render */}
                  <div style={{ fontSize: 12, color: C.textSub, fontFamily: F.body }}>
                    🪟 {r.view ?? "Bilgi yok"}
                  </div>
                  {/* features */}
                  {(r.features?.length ?? 0) > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                      {r.features.map((f, fi) => (
                        <span key={fi} style={{
                          fontSize: 10, color: C.textSub, background: C.surface,
                          padding: "2px 7px", borderRadius: 99,
                          border: `1px solid ${C.border}`, fontFamily: F.body,
                        }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* section etiketi (Swissôtel gibi otellerde) */}
                  {r.section && (
                    <div style={{
                      marginTop: 5, fontSize: 10, color: C.gold,
                      fontFamily: F.body, fontWeight: 600,
                    }}>
                      📍 {r.section}
                    </div>
                  )}
                  {r.note && (
                    <div style={{ fontSize: 11, color: C.gold, marginTop: 4, fontFamily: F.body }}>
                      ★ {r.note}
                    </div>
                  )}
                </div>
              ))}

              <Divider my={20} />

              {/* Aquapark */}
              <SLabel>🌊 Aquapark & Havuz</SLabel>
              <div style={{
                background: C.surface2, borderRadius: 9, padding: "2px 14px",
                border: `1px solid ${C.border}`, marginBottom: 16,
              }}>
                <InfoRow
                  label="Aquapark"
                  value={hasAquapark ? "✓ Var" : "✗ Yok"}
                  valueColor={hasAquapark ? C.green : C.red}
                />
                {hasAquapark && (
                  <>
                    <InfoRow label="Ad"      value={hotel.aquapark?.name    ?? "Bilgi yok"} />
                    <InfoRow label="Saatler" value={hotel.aquapark?.hours   ?? "Bilgi yok"} />
                    <InfoRow
                      label="Dahil mi"
                      value={hotel.aquapark?.included ? "✓ Ücretsiz" : "Ücretli"}
                      valueColor={hotel.aquapark?.included ? C.green : C.amber}
                    />
                    {/* FIX 5: slides number — sadece sayıysa göster */}
                    <InfoRow
                      label="Kaydırak"
                      value={getSlidesLabel(hotel.aquapark?.slides)}
                      valueColor={C.cyan}
                    />
                  </>
                )}
                {/* FIX 4 & 6: minAge yok datada — kaldırıldı. note güvenli */}
                <InfoRow label="Not" value={hotel.aquapark?.note ?? "—"} last />
              </div>

              {/* Çocuk kulübü */}
              {hasKidsClub && (
                <>
                  <SLabel>👧 {hotel.kidsClub?.name ?? "Çocuk Kulübü"}</SLabel>
                  <div style={{
                    background: C.surface2, borderRadius: 9, padding: "2px 14px",
                    border: `1px solid ${C.border}`, marginBottom: 10,
                  }}>
                    <InfoRow label="Yaş"    value={hotel.kidsClub?.ageRange ?? "Bilgi yok"} valueColor={C.green} />
                    <InfoRow label="Saatler" value={hotel.kidsClub?.hours   ?? "Bilgi yok"} />
                    <InfoRow label="Ücret"  value={hotel.kidsClub?.price    ?? "Bilgi yok"} valueColor={C.green} last />
                  </div>
                  {(hotel.kidsClub?.activities?.length ?? 0) > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                      {hotel.kidsClub.activities.map((a, ai) => (
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

              {/* FIX 2: adultOnly.ageLimit null safe */}
              {isAdultOnly && hotel.adultOnly?.note && (
                <div style={{
                  padding: "12px 14px", background: C.redDim,
                  border: `1px solid ${C.red}44`, borderRadius: 9,
                  fontSize: 13, color: C.red, fontFamily: F.body,
                }}>
                  🔞 {hotel.adultOnly.note}
                  {ageLimitLabel && (
                    <span style={{ marginLeft: 6, fontWeight: 700 }}>({ageLimitLabel} Only)</span>
                  )}
                </div>
              )}

              {/* adultOnly notu — adults-only değil ama notu varsa göster */}
              {!isAdultOnly && hotel.adultOnly?.note && (
                <div style={{
                  padding: "10px 14px", background: C.surface2,
                  border: `1px solid ${C.border}`, borderRadius: 9,
                  fontSize: 12, color: C.textSub, fontFamily: F.body,
                }}>
                  ℹ️ {hotel.adultOnly.note}
                </div>
              )}
            </div>
          )}

          {/* ════ RESTORANLAR ════ */}
          {tab === "food" && (
            <div style={{ animation: "slideU .18s ease" }}>
              <SLabel>🍽 Restoranlar & Barlar</SLabel>
              {(hotel.restaurants ?? []).map((r, i) => {
                // FIX 4: extraCharge veya extra_charge
                const charged = isExtraCharge(r);
                return (
                  <div key={i} style={{
                    padding: "11px 14px", background: C.surface2, borderRadius: 9,
                    border: `1px solid ${charged ? C.amber + "55" : C.border}`,
                    marginBottom: 8,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: F.head }}>
                        {r.name ?? "—"}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                        {charged && (
                          <span style={{
                            fontSize: 10, color: C.amber, background: C.amberDim,
                            padding: "1px 7px", borderRadius: 99,
                            border: `1px solid ${C.amber}44`, fontFamily: F.body, fontWeight: 600,
                          }}>
                            💰 {r.priceNote ?? "Ekstra Ücretli"}
                          </span>
                        )}
                        {!charged && (
                          <span style={{
                            fontSize: 10, color: C.green, background: C.greenDim,
                            padding: "1px 7px", borderRadius: 99,
                            border: `1px solid ${C.green}44`, fontFamily: F.body, fontWeight: 600,
                          }}>
                            ✓ Dahil
                          </span>
                        )}
                        <span style={{ fontSize: 11, color: C.textDim, fontFamily: F.body }}>
                          {r.hours && r.hours !== "Bilgi yok" ? r.hours : ""}
                        </span>
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: C.textSub, fontFamily: F.body }}>
                      {r.cuisine ?? "—"}
                      {r.note && (
                        <span style={{ color: C.amber }}> · ⚠️ {r.note}</span>
                      )}
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
                <InfoRow label="Havalimanı"     value={hotel.transfer?.airport              ?? "Bilgi yok"} />
                <InfoRow label="Süre"           value={hotel.transfer?.duration             ?? "Bilgi yok"} valueColor={C.cyan} />
                <InfoRow label="Tahmini Fiyat"  value={hotel.transfer?.approxPrice          ?? "Bilgi yok"} />
                <InfoRow label="Seçenekler"     value={hotel.transfer?.options?.join(", ")  ?? "Bilgi yok"} last />
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
                "{hotel.salesScript?.opening ?? "—"}"
              </div>

              <SLabel>✅ Anahtar Satış Noktaları</SLabel>
              <div style={{ marginBottom: 16 }}>
                {(hotel.salesScript?.keyPoints ?? []).map((p, i) => (
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
                    border: `1px solid ${C.pink ?? C.red}22`, borderRadius: 9,
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
              {(hotel.objections ?? []).length === 0 && (
                <div style={{ fontSize: 13, color: C.textDim, fontFamily: F.body }}>
                  Bilgi yok
                </div>
              )}
              {(hotel.objections ?? []).map((o, i) => (
                <div key={i} style={{
                  marginBottom: 12, background: C.surface2,
                  borderRadius: 9, border: `1px solid ${C.border}`, overflow: "hidden",
                }}>
                  <div style={{
                    padding: "9px 14px", background: "rgba(56,189,248,0.05)",
                    borderBottom: `1px solid ${C.border}`, fontSize: 13,
                    fontWeight: 600, color: C.cyan, fontFamily: F.body,
                  }}>
                    ❓ {o.q ?? "—"}
                  </div>
                  <div style={{
                    padding: "10px 14px", fontSize: 13, color: C.text,
                    lineHeight: 1.65, fontFamily: F.body,
                  }}>
                    {o.a ?? "Bilgi yok"}
                  </div>
                </div>
              ))}
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
