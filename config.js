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

  // ── Identity ──────────────────────────────────────────────
  clubName:  'Southern Smashers',
  groupName: 'Saturday Group',       // shown under club name in nav
  
  supabaseUrl: 'https://goegqodxnqmqfuhqqwje.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZWdxb2R4bnFtcWZ1aHFxd2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTM0MzcsImV4cCI6MjEwMjM2OTQzN30.qC-7tyI2OoIMl-boW7f-NtWz63AUgMdacQ6uUeWo7Mw',

  casualFee:  11,
  sessionPin: '2055',
  financePin: '2055',

  // ── Theme — DARK GOLD (Southern Smashers signature) ────────
  theme: {
    // Backgrounds
    bg:          '#0F1923',   // dark charcoal — main page bg
    card:        '#1A2433',   // dark card surface
    card2:       '#0F1923',   // deeper card / stat box
    dark:        '#0A1018',   // darkest

    // Accent colours
    accent:      '#D4A017',   // gold — primary accent
    accent2:     '#E05A00',   // flame orange — secondary
    accentText:  '#0A1018',   // text on accent buttons

    // Text
    text:        '#F5EDD8',   // warm cream — main text
    textMuted:   '#8A9AB0',   // muted / labels

    // Borders
    border:      '#2C3E52',   // dark blue-grey border
    red:         '#C0200A',   // error / delete

    // Nav
    navBg:       'linear-gradient(135deg,#0A1018 0%,#0F1923 60%,#140800 100%)',
    navBorder:   '#D4A017',
  },
};
