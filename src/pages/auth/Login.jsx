import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/login.css";

const Login = () => {
  const { supabase } = useAuth();
  return (
    <div className="login-container">
      <div className=".inner-login-container">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
        />
      </div>
    </div>
  );
};

export default Login;
