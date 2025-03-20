
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-nitte-blue mb-4">R&D Portal Login</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your dashboard to manage research projects
            </p>
          </div>
          
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
