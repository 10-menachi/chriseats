// import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  console.log(session);

  if (!session) {
    return (
      <Auth
        className="w-1/2"
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
      />
    );
  } else {
    const { email, user_metadata } = session.user;
    return (
      <div>
        <h2>{email}</h2>
        <h2>{user_metadata.name}</h2>
      </div>
    );
  }
}
