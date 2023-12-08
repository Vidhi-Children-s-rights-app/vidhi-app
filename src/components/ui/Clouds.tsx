import { MotiView } from 'moti';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { CloudState } from '../../constants';
import { StateType } from '../../types';

export const Clouds: React.FC<{ currentState: StateType }> = ({
  currentState
}) => {
  return (
    <MotiView
      style={{
        height: '50%',
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}
      from={{ top: CloudState[currentState].from }}
      animate={{ top: CloudState[currentState].to }}
    >
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 941 864"
        fill="none"
        style={{ position: 'absolute', top: '-5%' }}
      >
        <Path
          d="M71.019 785.598C42.82 792.599 30.287 795.1 0 795.1V0h941v789.599c-21.209 2.734-31.854 5.105-54.309 6.001-25.065 1-40.209-1.5-64.752-9.501-21.932-9.002-44.387-19.503-67.886-46.007-20.365-24.504-33.42-47.508-41.253-81.013-30.288 16.003-52.742 25.004-99.74 28.505-36.032 1-69.452-4.501-103.395-21.504-9.922 23.504-26.11 43.007-46.998 59.009-24.543 15.003-48.564 26.004-89.296 26.004-8.877 33.505-19.843 58.009-54.831 83.013-47.519 27.504-106.528 39.506-157.181 21.003-27.154-5.501-73.108-28.504-90.34-69.511z"
          fill="url(#paint0_linear_153_51)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_153_51"
            x1={436.557}
            y1={329.03}
            x2={472.035}
            y2={641.436}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#fff" stopOpacity={0.6} />
          </LinearGradient>
        </Defs>
      </Svg>
    </MotiView>
  );
};
