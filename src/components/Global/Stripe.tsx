import React from "react";

interface stripeProps {
  text: string;
}

const Stripe = ({ text }: stripeProps) => {
  return (
    <div className="flex items-center justify-center w-full bg-sciblue">
      <h2 className="text-3xl font-bold text-white uppercase p-11 max-sm:text-2xl">{text}</h2>
    </div>
  );
};

export default Stripe;
