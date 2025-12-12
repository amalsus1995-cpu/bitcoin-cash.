import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://hpcipbpgsmvwmkseqfbk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_...";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
