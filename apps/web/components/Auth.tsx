"use client"; // Ensure this runs only on the client

import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../lib/supabase";

export function Auth() {
  const redirectToUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/auth/callback` 
    : undefined;
  console.log(redirectToUrl)
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Welcome to Timelapser
        </h2>
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#2563eb",
                  brandAccent: "#1d4ed8",
                  inputText: '#ffffff',
                },
              },
            },
          }}
          providers={["google"]}
          redirectTo={redirectToUrl}
        />
      </div>
    </div>
  );
}
