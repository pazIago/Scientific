import React, { ReactNode } from "react";

interface titleProps {
  children: ReactNode;
  hasDetail?: boolean;
}

const Title = ({ children, hasDetail }: titleProps) => {
  if (hasDetail)
    return (
      <h2 className="text-[2rem] max-md:text-2xl text-sciblue uppercase font-bold after:block after:bg-sciblue after:h-[6px] after:w-[36px] after:mt-1 after:content-['']">
        {children}
      </h2>
    );
  else
    return (
      <h2 className="text-[2rem] max-md:text-2xl text-sciblue uppercase font-bold">
        {children}
      </h2>
    );
};

export default Title;
