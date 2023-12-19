import Svg, { Path } from 'react-native-svg';

export default function ChatIcon({ lineColor }: { lineColor: string }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 113 105" fill="none">
      <Path
        d="M56.5 96.25c26.004 0 47.083-19.587 47.083-43.75S82.504 8.75 56.5 8.75C30.496 8.75 9.416 28.337 9.416 52.5c0 7.967 2.293 15.444 6.3 21.875l-3.945 19.688 21.187-3.667c7.155 3.846 15.276 5.866 23.542 5.854z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.9 36.694h48.967M33.9 70.564h48.967M29.192 53.629h57.442"
        stroke={lineColor}
        strokeWidth={6}
        strokeLinecap="round"
      />
    </Svg>
  );
}
