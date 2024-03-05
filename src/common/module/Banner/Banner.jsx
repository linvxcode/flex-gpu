import CardBanner from "@/common/component/element/CardBanner";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full px-5 lg:px-10 xl:px-20  max-w-[1500px]">
        <CardBanner title='Lets Get Started.' className="w-full" />
    </div>
  );
}
