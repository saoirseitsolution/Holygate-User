"use client";
import { Check } from "lucide-react";
import React from "react";

export const BookingStepper = ({ step, setStep }: { step: number; setStep: (step: number) => void }) => {
  const steps = [
    { id: 1, label: "Details" },
    { id: 2, label: "Review" },
    { id: 3, label: "Payment" }
  ];

  return (
    <div className="flex items-center mt-16 justify-center gap-2 mb-10">
      {steps.map((s, i) => (
        <React.Fragment key={s.id}>
          <div className="flex items-center gap-3 " onClick={()=> setStep(i+1)}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
              ${step >= s.id ? "bg-[#2E2773] border-[#2E2773] text-white" : "bg-white border-gray-100 text-gray-300"}`}>
              {step > s.id ? <Check size={16} strokeWidth={4} /> : s.id}
            </div>
            <span className={`text-[13px] font-bold ${step >= s.id ? "text-[#2E2773]" : "text-gray-300"}`}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && <div className={`w-12 h-0.5 mx-2 ${step > s.id ? "bg-[#2E2773]" : "bg-gray-100"}`} />}
        </React.Fragment>
      ))}
    </div>
  );
};