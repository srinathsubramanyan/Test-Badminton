/**
 * Baddy Buddies - Tuesday Group Config
 * ─────────────────────────────────────────
 * Rename this file to config.js in your deployment folder.
 * Never edit index.html — only this file needs to change per group.
 */
window.APP_CONFIG = {

  // ── Identity ──────────────────────────────────────────────
  clubName:  'Baddy Buddies',
  groupName: 'Tuesday Group',       // shown under club name in nav

  // ── Supabase credentials ───────────────────────────────────
  // Get these from: Supabase project → Settings → API
  supabaseUrl: 'https://fhvpihdirybyhkbzgktd.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodnBpaGRpcnlieWhrYnpna3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5Nzk3NDUsImV4cCI6MjEwMzU1NTc0NX0.-BFHk1CZhKefjw92y6NVgQOG4MGDNpu6rdLuDsVgNf4',

  // ── Finance defaults ───────────────────────────────────────
  // These are fallback values — app_settings in the database takes precedence
  casualFee:  11,
  sessionPin: '2055',
  financePinr: '2055',

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

    // Nav tab colours — dark text on white nav
    navTabColor:        '#111827',          // inactive tab text — near-black, visible on white
    navTabActiveBg:     'rgba(5,150,105,.12)',  // emerald tint for active tab
    navTabActiveBorder: '#059669',              // emerald border on active tab
    navTabHoverBg:      'rgba(5,150,105,.06)',  // subtle emerald on hover
  },
};

  
