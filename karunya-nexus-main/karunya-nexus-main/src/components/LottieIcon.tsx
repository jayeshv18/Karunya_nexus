import Lottie from "lottie-react";

// Inline Lottie animation data for tech icons
const circuitAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  layers: [
    {
      ty: 4,
      nm: "Circuit",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 60, s: [360] }] },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 60] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 5 },
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.85, 1, 1] },
              o: { a: 1, k: [{ t: 0, s: [30], e: [100] }, { t: 30, s: [100], e: [30] }, { t: 60, s: [30] }] },
              w: { a: 0, k: 2 },
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
    },
  ],
};

const pulseAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  layers: [
    {
      ty: 4,
      nm: "Pulse",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [80, 80, 100], e: [120, 120, 100] }, { t: 30, s: [120, 120, 100], e: [80, 80, 100] }, { t: 60, s: [80, 80, 100] }] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [40, 40] },
              p: { a: 0, k: [0, 0] },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0, 0.85, 1, 1] },
              o: { a: 1, k: [{ t: 0, s: [100], e: [30] }, { t: 30, s: [30], e: [100] }, { t: 60, s: [100] }] },
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
    },
  ],
};

const networkAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 100,
  h: 100,
  layers: [
    {
      ty: 4,
      nm: "Network",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 90, s: [360] }] },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              d: 1,
              pt: { a: 0, k: 6 },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 0 },
              ir: { a: 0, k: 15 },
              is: { a: 0, k: 0 },
              or: { a: 0, k: 30 },
              os: { a: 0, k: 0 },
            },
            {
              ty: "st",
              c: { a: 0, k: [0.66, 0.33, 0.97, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 2 },
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
    },
  ],
};

const animations = {
  circuit: circuitAnimation,
  pulse: pulseAnimation,
  network: networkAnimation,
};

interface LottieIconProps {
  type: keyof typeof animations;
  className?: string;
  size?: number;
}

const LottieIcon = ({ type, className = "", size = 48 }: LottieIconProps) => {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={animations[type]}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieIcon;
