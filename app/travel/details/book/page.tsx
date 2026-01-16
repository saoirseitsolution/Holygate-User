"use client"
import { useEffect, useState } from "react";
import { BookingStepper } from "./_components/BookingStepper";
import { BookingSummary } from "./_components/BookingSummary";
import { DetailsForm, ReviewBooking } from "./_components/DetailsForm";
import { InstallmentPlan } from "./_components/InstallmentPlan";
import { PaymentInformation } from "./_components/PaymentInformation";
import { useRouter } from "next/navigation";

export default function BookingApp() {
  const route = useRouter();
  const [step, setStep] = useState<number>(1);
  const [showSummary, setShowSummary] = useState<boolean>(true);
  useEffect(() => {
    if ( step === 3) {
      setShowSummary(false);    
    } else {
      setShowSummary(true);
    }
    }, [step]);

  return (
   
    <div className="container">
      <div className=" -my-3">
      <BookingStepper step={step} setStep={setStep} />
      <div className={`grid grid-cols-12 gap-8 items-start pb-12 mx-auto`}>
        <div className={`${showSummary ? "lg:col-span-8 col-span-12" : "col-span-12"} space-y-6`}>
          {step === 1 && <DetailsForm />}
          {step === 2 && <ReviewBooking />}
          {step === 3 && <InstallmentPlan  />}
            {step === 4 && <PaymentInformation onBack={()=> setStep(3)}/>}
          
          <div className={`flex gap-4 ${showSummary ? "w-5/6" : "w-3/4"}`}>
            {step > 1 && (
              <button onClick={() =>{
                 setStep(s => s-1)}} className="flex-1 py-2 font-bold border border-gray-200 rounded-xl hover:bg-gray-50">Back</button>
            )}
            <button onClick={() =>{
                if(step ==3){
                    setStep(4)
                }else{
                  if(step === 4){
                  route.push('/travel/success/?back=/travel')
                  return
                 }
                 setStep(s => s+1)}
                 }} className="flex-2 py-3 font-semibold bg-[#2E2773] text-white rounded-xl shadow-lg shadow-[#3F37C9]/20">
              {step === 3 ? "Proceed to Pay" : step === 4 ? "Complete Booking" : "Continue"}
            </button>
          </div>
        </div>
       {showSummary && <div className="col-span-4 hidden lg:block">
          <BookingSummary />
        </div>}
      </div>
      </div>
    </div>
   
  );
}