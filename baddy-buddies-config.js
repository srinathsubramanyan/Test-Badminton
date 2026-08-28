/**
 * BADDY BUDDIES — Tuesday Group Config
 * ──────────────────────────────────────
 * Rename this file to config.js in your deployment folder.
 * Never edit index.html — only this file needs to change per group.
 *
 * SETUP STEPS:
 * 1. Create a new Supabase project for this group
 * 2. Run supabase-setup.sql in the new project's SQL Editor
 * 3. Replace supabaseUrl and supabaseKey below with the new project's values
 * 4. Deploy index.html + this file (renamed to config.js) to a new GitHub Pages repo
 */
window.APP_CONFIG = {

  // ── Identity ──────────────────────────────────────────────
  clubName:  'Baddy Buddies',
  groupName: 'Tuesday Group',

  // ── Supabase credentials ───────────────────────────────────
  // ⚠️  Replace with your NEW Supabase project credentials
  supabaseUrl: 'https://YOUR_NEW_PROJECT.supabase.co',
  supabaseKey: 'YOUR_NEW_ANON_KEY',

  // ── Finance defaults ───────────────────────────────────────
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
