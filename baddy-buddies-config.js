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
  groupName: 'Tuesday Group',      // shown under club name in nav

  // ── Supabase credentials ───────────────────────────────────
  // ⚠️  Replace these with your NEW Supabase project credentials
  supabaseUrl: 'https://YOUR_NEW_PROJECT.supabase.co',
  supabaseKey: 'YOUR_NEW_ANON_KEY',

  // ── Finance defaults ───────────────────────────────────────
  casualFee:  11,
  sessionPin: '2055',
  financePin: '2055',

  // ── Theme — WHITE / BLUE / PURPLE (Baddy Buddies) ──────────
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
  },
};
