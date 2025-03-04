'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

// Generic Lottie Animation Props
type LottieAnimationProps = {
  animationData: object; // Pass the animation JSON
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
};

// Dynamically Import Lottie Player (client-side only)
const Player = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// Generic Lottie Animation Component
const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  height = 200,
  width = 200,
  loop = true,
  autoplay = true,
}) => {
  return (
    <Player
      animationData={animationData}
      autoplay={autoplay}
      loop={loop}
      style={{ height, width }}
    />
  );
};

// JSON Animations (use `/` for public folder paths)
import mascotSing from '../public/animations/mascot_sing.json';
import mascotLaptopUse from '../public/animations/mascot_laptop use.json';
import mascotCreatingAI from '../public/animations/Mascot_Creating_AI.json';
import mascotQnASearch from '../public/animations/Mascot_QnA_Search.json';
import mascotMultimedia from '../public/animations/Mascot_Multimedia.json';
import mascotHomeDefault from '../public/animations/Mascot Home Default.json';
import mascotLogin from '../public/animations/Mascot Login.json';
import contactusmascot from '../public/animations/contactusmascot.json';
// Reusable Components with Specific Animations
export const LottiePlayer1 = () => (
  <LottieAnimation height={60} width={60} animationData={mascotSing} />
);

export const LottiePlayer2 = () => (
  <LottieAnimation height={60} width={60} animationData={mascotLaptopUse} />
);

export const LottiePlayer3 = () => (
  <LottieAnimation height={60} width={60} animationData={mascotCreatingAI} />
);

export const LottiePlayer4 = () => (
  <LottieAnimation height={100} width={100} animationData={mascotQnASearch} />
);

export const LottiePlayer5 = () => (
  <LottieAnimation height={60} width={60} animationData={mascotMultimedia} />
);

export const LottiePlayer6 = () => (
  <LottieAnimation animationData={mascotHomeDefault} />
);

export const LottiePlayer7 = () => (
  <LottieAnimation animationData={mascotLogin} height={400} width={400} />
);

export const LottiePlayer8 = () => (
  <LottieAnimation animationData={contactusmascot} height={400} width={600} />
);
