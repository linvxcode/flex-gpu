import CardBanner from "@/common/component/element/CardBanner";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full lg:px-10 px-5 max-w-[1500px]">
        <CardBanner title='Lets Get Started.' className="w-full" />
    </div>
  );
}
