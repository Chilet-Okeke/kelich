import React, { useState, useEffect } from "react";
import gsap from "gsap";
import SplitType from 'split-type'
export default function App() {
  const [height, setHeight] = useState(0);
  const [kirpichtimeconc, setKirpichTimeConc] = useState(0)
  const [kirpichlength, setKirpichLength] = useState(0)
  const [kirpichslope, setKirpichSlope] = useState(0)

  const calculateKirpichTime = () => {
    const L = parseFloat(kirpichlength);
    const S = parseFloat(kirpichslope);

    if (L > 0 && S > 0) {
      const Tc = 0.0195 * Math.pow(L, 0.77) / Math.pow(S, 0.385);
      setKirpichTimeConc(Tc);
    } else {
      setKirpichTimeConc(0);
    }
  };

  useEffect(() => {
    const text1 = new SplitType(".hero_header");
    const text2 = new SplitType(".hero_header_2");
    // hero_text2
    // gsap.fromto;
    // gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });
    gsap
      .timeline()
      .to("body", { css: { visibility: "visible" } })
      .fromTo(
        text2?.chars,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: { amount: 0.6 },
          duration: 1,
          ease: "power4.out",
        },
        0.4
      )
      .fromTo(
        text1?.words,
        {
          y: "100%",
          opacity: 0,
          skew: 7,
        },
        {
          y: 0,
          skew: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1.6,
          ease: "power4.out",
        },
        0.8
      )
      .fromTo(
        '.hero_card',
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
        }
      );
  }, []);

  return (
    <div className="based" style={{ height }}>
      <div className="w-full overflow-hidden py-40 flex items-center justify-center relative min-h-[100vh]">
        <div className="w-full py-6 z-[50] bg-[#000] fixed top-0 flex items-center justify-between">
          <div className="w-full md:px-8 px-4 mx-auto md:max-w-[1500px] flex items-center justify-between">
            <h3 className="text-3xl md:text-3xl text-[#Fff] font-bold md:text-start">
              Daniel
            </h3>

            <h3 className="text-lg md:text-xl text-[#Fff] font-semibold md:text-start">
              Agric Eng.
            </h3>
          </div>
        </div>
        <div className="absolute h-full z-30 w-full gradient2"></div>
        <img src="/images/pics_1.jpg" alt="" className="absolute z-20 object-cover w-full h-full" />
        <div className="w-full h-full lg:px-0 z-40 px-4 md:max-w-[1100px] justify-center mx-auto flex flex-col gap-20">
          <div className="w-full flex flex-col gap-3">
            <div className="hide">
              <h2 className="text-8xl hero_header md:text-9xl md:text-center family1 text-[#fff]">
                Daniel's Project
              </h2>
            </div>
            <div className="hide">
              <span className="hero_header_2 px-4 md:text-center family2 text-lg md:text-xl text-[var(--grey-1)]">
                A project demonstrating  time of concentration using various Methods
              </span>
            </div>

          </div>
          <div className="w-full grid lg:grid-cols-2 gap-12">
            <div className="py-12 hero_card px-6 flex w-full rounded-lg bg-[#fff] flex-col gap-8">
              <h3 className="text-3xl md:text-4xl font-bold md:text-start">
                Kirpich Model
                <span className="block family2 mx-w-[500px] pr-4 text-sm font-normal md:text-base text-[var(--grey-1)]">
                  A project demonstrating  time of concentration using various Methods
                </span>
              </h3>
              <div className="w-full flex flex-col gap-4">
                <label htmlFor="length" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Length
                  <input id="length" value={kirpichlength} type='number' name="kirpichlength" onChange={(e) => setKirpichLength(e.target.value)} placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>
                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Slope
                  <input value={kirpichslope} type='number' name="kirpichslope" onChange={(e) => setKirpichSlope(e.target.value)} id="slope" placeholder="Enter the Slope" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>

                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  Kirpich Time Concentration Value
                  <div className="border px-4 flex items-center border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" >
                    {kirpichtimeconc}
                  </div>
                </label>

                <div className="w-full">
                  <button onClick={calculateKirpichTime} style={{ transition: "all ease .4s" }} className="px-4 text-[#fff] bg-[rgba(0,0,0,1)] hover:scale-[0.89] outline-none text-lg font-semibold w-full h-[70px] rounded-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="py-12 hero_card px-6 flex w-full rounded-lg bg-[#fff] flex-col gap-8">
              <h3 className="text-3xl md:text-4xl font-bold md:text-start">
                SCS Lag Model
                <span className="block family2 mx-w-[500px] pr-4 text-sm font-normal md:text-base text-[var(--grey-1)]">
                  A project demonstrating  time of concentration using various Methods
                </span>
              </h3>

              <div className="w-full flex flex-col gap-4">
                <label htmlFor="length" className="text-base font-semibold flex flex-col gap-2">
                  SCS Length
                  <input id="length" type="text" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>
                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  SCS Slope
                  <input id="slope" type="text" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>

                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  SCS Time Concentration Value
                  <div className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" >

                  </div>
                </label>

                <div className="w-full">
                  <button style={{ transition: "all ease .4s" }} className="px-4 text-[#fff] bg-[rgba(0,0,0,1)] hover:scale-[0.89] outline-none text-lg font-semibold w-full h-[70px] rounded-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
