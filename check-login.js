// check-login.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://omzcbfjtwyygvvgxsiov.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Plndzp1kowyp6OgTwTGwHA_iUIO0ae0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function requireLogin() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = "login.html";
  }
}

export async function loadUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
