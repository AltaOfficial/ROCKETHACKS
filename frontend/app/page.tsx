"use client";

import { Button } from "@/components/ui/button";
import { Mic, Upload } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Public Speaking Coach
        </h1>
        
        <div className="p-8 rounded-lg shadow-lg bg-white/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <Link href="/record">
              <Button size="lg" className="text-lg px-8 py-6">
                <Mic className="mr-2 h-5 w-5" />
                Record A Speech
              </Button>
            </Link>
            
            <span className="text-gray-500">or</span>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2 h-5 w-5" />
              Upload Your Recording
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}