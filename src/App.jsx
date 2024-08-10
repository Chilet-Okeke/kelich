import React, { useState, useEffect, lazy, Suspense } from "react";
export default function App() {
  const [height, setHeight] = useState(0);
  const [kirpichtimeconc, setKirpichTimeConc] = useState(0)
  const [kirpichlength, setKirpichLength] = useState(0)
  const [kirpichslope, setKirpichSlope] = useState(0)
  return (
    <div className="based" style={{ height }}>
      <div className="w-full overflow-hidden py-40 flex items-center justify-center relative min-h-[100vh]">
        <div className="absolute h-full z-30 w-full gradient2"></div>
        <img src="/images/pics_1.jpg" alt="" className="absolute z-20 object-cover w-full h-full" />
        <div className="w-full h-full md:px-0 z-40 px-8 md:max-w-[1100px] justify-center mx-auto flex flex-col gap-20">
          <h2 className="text-7xl md:text-9xl md:text-center family1 text-[#fff]">
            Daniel's Project
            <span className="block family2 text-lg md:text-xl text-[var(--grey-1)]">
              A project demonstrating  time of concentration using various Methods
            </span>
          </h2>
          <div className="w-full grid grid-cols-2 gap-12">
            <div className="py-12 px-6 flex w-full rounded-lg bg-[#fff] flex-col gap-8">
              <h3 className="text-5xl md:text-4xl font-bold md:text-start">
                Kirpich Model
                <span className="block family2 mx-w-[500px] pr-4 text-sm font-normal md:text-base text-[var(--grey-1)]">
                  A project demonstrating  time of concentration using various Methods
                </span>
              </h3>
              <div className="w-full flex flex-col gap-4">
                <label htmlFor="length" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Length
                  <input id="length" type="text" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>
                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Slope
                  <input id="slope" type="text" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>

                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Time Concentration Value
                  <div className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" >

                  </div>
                </label>

                <div className="w-full">
                  <button style={{ transition: "all ease .4s" }} className="px-4 text-[#fff] bg-[rgba(0,0,0,1)] hover:scale-[0.89] outline-none text-lg font-semibold w-full h-[70px] rounded-lg">
                    Enter
                  </button>
                </div>
              </div>
            </div>

            <div className="py-12 px-6 flex w-full rounded-lg bg-[#fff] flex-col gap-8">
              <h3 className="text-5xl md:text-4xl font-bold md:text-start">
                SCS Lag Model
                <span className="block family2 mx-w-[500px] pr-4 text-sm font-normal md:text-base text-[var(--grey-1)]">
                  A project demonstrating  time of concentration using various Methods
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
