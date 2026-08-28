/**
 * config.js — GROUP SWITCHER
 * ───────────────────────────
 * This is the ONLY file that differs between the two group deployments.
 *
 * For Southern Smashers (Monday):  paste contents of southern-smashers-config.js here
 * For Baddy Buddies (Tuesday):     paste contents of baddy-buddies-config.js here
 *
 * Current: Southern Smashers (Monday Group)
 */

// ─── PASTE YOUR GROUP CONFIG BELOW ────────────────────────────────────────
window.APP_CONFIG = {

  clubName:  'Baddy Buddies',
  groupName: 'Tuesday Group',      // shown under club name in nav

  supabaseUrl: 'https://goegqodxnqmqfuhqqwje.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZWdxb2R4bnFtcWZ1aHFxd2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTM0MzcsImV4cCI6MjEwMjM2OTQzN30.qC-7tyI2OoIMl-boW7f-NtWz63AUgMdacQ6uUeWo7Mw',

  casualFee:  11,
  sessionPin: '2055',
  financePin: '2055',

// ── Theme — WHITE / EMERALD / CORAL ────────────────────────
  // Clean, high-contrast, light — completely distinct from SS dark gold
  theme: {
    // Backgrounds — pure white, very light tints
    bg:          '#FFFFFF',   // page background
    card:        '#F9FAFB',   // card surface (near white)
    card2:       '#F0FDF4',   // stat boxes — light emerald tint
    dark:        '#111827',   // darkest text / overlays

    // Accents — emerald green primary, coral secondary
    accent:      '#059669',   // emerald green — buttons, highlights
    accent2:     '#F97316',   // coral orange — secondary accent
    accentText:  '#FFFFFF',   // white text on accent buttons

    // Text — high contrast dark on white
    text:        '#111827',   // near-black main text
    textMuted:   '#6B7280',   // medium grey for labels

    // Borders — subtle light grey
    border:      '#E5E7EB',   // light grey border
    red:         '#DC2626',   // error / delete

    // Nav — white with emerald bottom border (clean, minimal)
    navBg:       'linear-gradient(135deg,#FFFFFF 0%,#F9FAFB 100%)',
    navBorder:   '#059669',

    // Chips — coloured tints that read clearly on white
    chipGoingBg:     'rgba(5,150,105,.1)',    // emerald tint
    chipGoingBorder: '#059669',
    chipNoBg:        'rgba(220,38,38,.08)',   // red tint
    chipNoBorder:    '#DC2626',
    chipMaybeBg:     'rgba(249,115,22,.08)',  // coral tint
    chipMaybeBorder: '#F97316',

    // RSVP hero — always dark so text is readable
    heroBg1:    '#064E3B',   // deep emerald
    heroBg2:    '#065F46',   // slightly lighter emerald
    heroText:   'rgba(255,255,255,.85)',  // white subtitle text
    heroAccent: '#6EE7B7',   // light emerald for the title
  },
};
