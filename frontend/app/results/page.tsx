"use client";

import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score")!);
  const feedback = [
    {
      status: "success",
      message: "You got less than 3 filler words",
      improvement:
        "Keep practicing mindful speaking. Consider recording yourself in casual conversations to catch any emerging filler words early.",
    },
    {
      status: "error",
      message: "Your tone was too monotone",
      improvement:
        "Try varying your pitch and emphasis. Practice expressing different emotions while speaking. Use vocal exercises like sliding through your pitch range or emphasizing different words in the same sentence.",
    },
    {
      status: "error",
      message: "You talked too fast",
      improvement:
        "Practice speaking at a slower pace. Try the 'pause and breathe' technique: take a brief pause after each major point. Mark your script with deliberate pause points if needed.",
    },
    {
      status: "success",
      message: "You talked loud enough",
      improvement:
        "Great job with volume! Continue to project your voice while maintaining this comfortable level. Practice speaking from your diaphragm to maintain consistency.",
    },
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg shadow-lg bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Your Score</h2>
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold">{score}</span>
              </div>
              <div className="place-items-center z-10">
                <p className="text-black text-2xl">{score}</p>
              </div>
              <Progress.Root
                className="relative overflow-hidden bg-gray-200 rounded-full w-48 h-48"
                value={score}
              >
                <Progress.Indicator
                  className="bg-blue-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                  style={{ transform: `translateX(-${100 - score}%)` }}
                />
              </Progress.Root>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-white/50 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Feedback</h2>
            <div className="space-y-4">
              {feedback.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden ${
                    item.status === "success" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full p-4 flex items-start gap-3 text-left`}
                  >
                    {item.status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <span
                      className={
                        item.status === "success"
                          ? "text-green-700"
                          : "text-red-700"
                      }
                    >
                      {item.message}
                    </span>
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 ml-auto flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-auto flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems.includes(index) && (
                    <div
                      className={`p-4 pt-0 ${
                        item.status === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      <div className="border-t border-current opacity-20 mb-4" />
                      <h3 className="font-medium mb-2">How to improve:</h3>
                      <p className="text-sm">{item.improvement}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
