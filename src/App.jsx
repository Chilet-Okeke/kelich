import React, { useState, useEffect } from "react";
import gsap from "gsap";
import SplitType from 'split-type'
import toast from "react-hot-toast";
export default function App() {
  const [height, setHeight] = useState(0);
  const [kirpichtimeconc, setKirpichTimeConc] = useState([])
  const [kirpichlength, setKirpichLength] = useState(null)
  const [kirpichslope, setKirpichSlope] = useState(null)
  const [scstimeconc, setScsTimeConc] = useState(0)
  const [scslength, setScsLength] = useState(null)
  const [scsslope, setScsSlope] = useState(null)
  const calculateKirpichTime = () => {
    const L = parseFloat(kirpichlength);
    const S = parseFloat(kirpichslope);
    const maxTcValues = 200; // Limit to 200 Tc values

    if (L > 0 && S >= 0.001 && S <= 0.2) {
      let slopes = [];
      for (let j = S; j <= 0.2; j += 0.001) {
        slopes.push(j);
        console.log(`Added slope: ${j}`); // Logging the slope values
      }

      let lengths = [];
      for (let i = L; i <= 100; i += 0.5) {
        lengths.push(i);
        console.log(`Added length: ${i}`); // Logging the length values
      }

      let data = [];
      let tcCount = 0;

      outerLoop:
      for (let slope of slopes) {
        for (let length of lengths) {
          if (tcCount >= slopes?.length - 1) break outerLoop;

          const Tc = 0.0195 * Math.pow(length, 0.77) / Math.pow(slope, 0.385);
          data.push(`Tc-${length}=${Tc}`);
          tcCount++;

        }
      }
      setKirpichTimeConc(data)
    } else {
      console.warn("Please ensure the slope (S) is between 0.001 and 0.2");
    }
  };



  const calculateScsime = () => {
    const L = parseFloat(scslength);
    const S = parseFloat(scsslope);

    if (L > 0 && S > 0) {
      const Tc = 0.000877 * Math.pow(L, 0.8) * Math.pow((1000 / .45 - 9), .7) * Math.pow(S, -.5)
      setScsTimeConc(Tc);
    } else {
      setScsTimeConc(0);
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

  console.log(kirpichtimeconc)

  return (
    <div className="based" style={{ height }}>
      <div className="w-full overflow-hidden py-40 flex items-center justify-center relative min-h-[100vh]">
        <div className="w-full py-6 z-[50] bg-[#000000c2] fixed top-0 flex items-center justify-between">
          <div className="w-full md:px-8 px-4 mx-auto md:max-w-[1600px] flex items-center justify-between">
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
        <div className="w-full h-full lg:px-0 z-40 px-4 md:max-w-[1300px] justify-center mx-auto flex flex-col gap-20">
          <div className="w-full flex flex-col">
            <div className="hide">
              <h2 className="text-6xl hero_header font-bold md:text-8xl lg:text-center text-[#fff]">
                Daniel's Project
              </h2>
            </div>
            <div className="hide">
              <span className="hero_header_2 px-4 lg:text-center family2 text-lg md:text-xl text-[var(--grey-1)]">
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
                <div className="w-full">
                  <button onClick={calculateKirpichTime} style={{ transition: "all ease .4s" }} className="px-4 text-[#fff] bg-[rgba(0,0,0,1)] hover:scale-[0.89] outline-none text-lg font-semibold w-full h-[70px] rounded-lg">
                    Submit
                  </button>
                </div>

                <div className="w-full flex items-center flex-wrap gap-2">
                  {/* <span className="flex text-base text-[#000] font-semibold items-center gap-2">
                    Tc1 =  {kirpichtimeconc}
                  </span>
                  <span className="flex text-base text-[#000] font-semibold items-center gap-2">
                    Tc2 =  {kirpichtimeconc}
                  </span>
                  <span className="flex text-base text-[#000] font-semibold items-center gap-2">
                    Tc200 =  {kirpichtimeconc}
                  </span> */}
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
                  <input value={scslength} name="scslength" onChange={(e) => setScsLength(e.target.value)} id="length" type="number" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none number-sm w-full h-[50px] font-normal" />
                </label>
                <label htmlFor="slope" className="text-base font-semibold flex flex-col gap-2">
                  SCS Slope
                  <input id="slope" value={scsslope} name="scsslope" onChange={(e) => setScsSlope(e.target.value)} type="number" placeholder="Enter the Length" className="border px-4  border-[rgba(0,0,0,.4)] outline-none text-sm w-full h-[50px] font-normal" />
                </label>

                <div className="w-full">
                  <button onClick={calculateScsime} style={{ transition: "all ease .4s" }} className="px-4 text-[#fff] bg-[rgba(0,0,0,1)] hover:scale-[0.89] outline-none text-lg font-semibold w-full h-[70px] rounded-lg">
                    Submit
                  </button>
                </div>
               
              </div>
            </div>
          </div>
          <div className="py-12 hero_card px-6 flex w-full rounded-lg bg-[#fff] items-center flex-wrap gap-4">
            {
              kirpichtimeconc?.map((time, index) => {
                return <span className="flex text-base text-[#000] font-semibold items-center gap-2">
                  {time},
                </span>
              })
            }
          </div>
        </div>
      </div>
    </div>

  );
}
