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

  clubName:  'Southern Smashers',
  groupName: 'Monday Group',

  supabaseUrl: 'https://goegqodxnqmqfuhqqwje.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvZWdxb2R4bnFtcWZ1aHFxd2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTM0MzcsImV4cCI6MjEwMjM2OTQzN30.qC-7tyI2OoIMl-boW7f-NtWz63AUgMdacQ6uUeWo7Mw',

  casualFee:  11,
  sessionPin: '2055',
  financePin: '2055',

  theme: {
    bg:          '#0F1923',
    card:        '#1A2433',
    card2:       '#0F1923',
    dark:        '#0A1018',
    accent:      '#D4A017',
    accent2:     '#E05A00',
    accentText:  '#0A1018',
    text:        '#F5EDD8',
    textMuted:   '#8A9AB0',
    border:      '#2C3E52',
    red:         '#C0200A',
    navBg:       'linear-gradient(135deg,#0A1018 0%,#0F1923 60%,#140800 100%)',
    navBorder:   '#D4A017',
  },
};
