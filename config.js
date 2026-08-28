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

  theme: {
    // Backgrounds
    bg:          '#FFFFFF',   // crisp white — main page bg
    card:        '#F8F9FA',   // very light grey card surface
    card2:       '#EEF2FF',   // soft indigo tint — stat boxes
    dark:        '#1E293B',   // near-black for darkest elements

    // Accent colours
    accent:      '#2563EB',   // strong blue — primary accent
    accent2:     '#7C3AED',   // purple — secondary
    accentText:  '#FFFFFF',   // text on accent buttons

    // Text
    text:        '#1E293B',   // dark slate — main text
    textMuted:   '#64748B',   // slate grey — labels / muted

    // Borders
    border:      '#E2E8F0',   // soft grey border
    red:         '#DC2626',   // error / delete

    // Nav
    navBg:       'linear-gradient(135deg,#1E40AF 0%,#2563EB 60%,#4F46E5 100%)',
    navBorder:   '#7C3AED',

    // Chip / status colours for light theme
    chipGoingBg:     'rgba(37,99,235,.08)',
    chipGoingBorder: '#2563EB',
    chipNoBg:        'rgba(220,38,38,.08)',
    chipNoBorder:    '#DC2626',
    chipMaybeBg:     'rgba(124,58,237,.08)',
    chipMaybeBorder: '#7C3AED',
  },
};
