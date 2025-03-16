"use client";

import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as Progress from "@radix-ui/react-progress";

export default function RecordPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleRecord = () => {
    setIsRecording(true);
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const handleStop = () => {
    setIsRecording(false);
    router.push("/results");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="p-8 rounded-lg shadow-lg bg-white/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-8">
            <div className="w-24 h-24 relative">
              <Mic className={`w-full h-full ${isRecording ? "text-red-500 animate-pulse" : "text-gray-700"}`} />
            </div>
            
            <Progress.Root 
              className="relative overflow-hidden bg-gray-200 rounded-full w-full h-2"
              value={progress}
            >
              <Progress.Indicator
                className="bg-blue-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
              />
            </Progress.Root>
            
            {!isRecording ? (
              <Button 
                size="lg" 
                onClick={handleRecord}
                className="text-lg px-8 py-6"
              >
                Start Recording
              </Button>
            ) : (
              <Button 
                size="lg" 
                variant="destructive"
                onClick={handleStop}
                className="text-lg px-8 py-6"
              >
                <StopCircle className="mr-2 h-5 w-5" />
                End Recording
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}