import { useSpring, animated, easings } from '@react-spring/native';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';
import { EmergencyMessage } from './EmergencyMessage';
import { INITIAL_STATE, FINAL_STATE } from '../constants';
import { useEffect } from 'react';

type Props = {
  pauseBalloon: boolean;
  setPauseBalloon: any;
};

export const MainBalloon: React.FC<Props> = ({
  pauseBalloon,
  setPauseBalloon
}) => {
  const [{ translateX, translateY, scale }, { resume, pause }] = useSpring(
    () => ({
      from: INITIAL_STATE,
      to: [FINAL_STATE, INITIAL_STATE],
      loop: true,
      config: {
        duration: 5000,
        easing: easings.easeInOutBack,
        useNativeDriver: true
      }
    })
  );

  const handler = () => {
    pauseBalloon ? pause() : resume();
    setPauseBalloon(!pauseBalloon);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <animated.View
      style={{
        height: '30%',
        width: '30%',
        position: 'absolute',
        top: '50%',
        left: '10%',
        zIndex: 25,
        transform: [{ translateX }, { translateY }, { scale }]
      }}
    >
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 183 219"
        fill="none"
        onTouchStart={handler}
      >
        <Path
          d="M72.961 201.701h35.711v7.305c0 5.523-4.477 10-10 10h-15.71c-5.523 0-10-4.477-10-10v-7.305z"
          fill="url(#1)"
        />
        <Path
          d="M73.264 201.7l-6.053-14.918h3.027m3.026 14.918v-14.918m0 14.918l-3.026-14.918m3.026 0h-3.026m3.026 0h34.803m0 0V201.7m0-14.918h3.026m-3.026 14.918l6.052-14.918h-3.026m-3.026 14.918l3.026-14.918"
          stroke="#453703"
          strokeWidth={0.4}
        />
        <Path
          d="M90.88.006c-8.437.114-21.508 2.09-21.508 2.09s-15.627 3.57-24.551 8.422C36.454 15.067 31.686 16.63 24.578 23c-7.107 6.369-10.32 11.699-14.538 18.825-3.62 6.116-7.507 16.728-7.507 16.728S-.21 69.583.013 77.073c.385 12.96 10.027 32.262 10.027 32.262S18.466 125.157 37.111 150c8.188 10.911 16.685 22.352 29.077 37h49.706c9.796-10.661 18.071-20.427 25.015-29.169 12.606-15.866 20.83-28.356 25.818-36.684 4.595-7.671 6.445-11.812 6.445-11.812s9.51-19.075 9.819-32.261c.17-7.29-2.338-18.52-2.338-18.52s-3.802-10.605-7.481-16.729c-1.494-2.485-3.575-5.243-5.649-7.78a153.194 153.194 0 00-7.677-8.649S148.83 16.34 140.91 11.954c-9.202-5.095-25.015-9.857-25.015-9.857S100.681-.127 90.88.006z"
          fill="url(#2)"
        />
        <Path
          d="M154 32s-22.284-20.35-35.5-12c-9.867 6.234-9 28.5-9 28.5s7.107 19.536 14.5 32c9.07 15.29 18 16 30 21 7.846 3.269 16.867-4.874 19.5-21C177.5 56 154 32 154 32z"
          fill="#fff"
          fillOpacity={0.4}
        />
        <Defs>
          <LinearGradient
            id="1"
            x1={103}
            y1={201}
            x2={74.5}
            y2={210}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#B3952D" />
            <Stop offset={1} stopColor="#7D640D" />
          </LinearGradient>
          <LinearGradient
            id="2"
            x1={123.481}
            y1={63.574}
            x2={9.22961}
            y2={113.614}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF776E" />
            <Stop offset={1} stopColor="#DB422E" />
          </LinearGradient>
        </Defs>
      </Svg>
      <EmergencyMessage open={pauseBalloon} />
    </animated.View>
  );
};
