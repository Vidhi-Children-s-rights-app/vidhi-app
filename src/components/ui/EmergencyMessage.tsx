import { MotiView, Text } from 'moti';
import Svg, { Ellipse } from 'react-native-svg';

const shades = ['#9AB7E1', '#B0CAF1', '#7599D0'];

export const EmergencyMessage = () => {
  return (
    <MotiView
      style={{
        height: '30%',
        width: '100%',
        position: 'absolute',
        top: '-40%',
        left: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Svg width={'200%'} height={'200%'} viewBox="0 0 574 379" fill="none">
        <Ellipse cx={80.5} cy={319} rx={30.5} ry={26} fill={shades[0]} />
        <Ellipse cx={14} cy={366} rx={14} ry={13} fill={shades[1]} />
        <Ellipse
          cx={214.445}
          cy={258.691}
          rx={79.8399}
          ry={60.5896}
          fill={shades[2]}
        />
        <Ellipse
          cx={120.84}
          cy={211.273}
          rx={79.8399}
          ry={60.5896}
          fill={shades[2]}
        />
        <Ellipse
          cx={239.774}
          cy={150.684}
          rx={118.383}
          ry={81.1373}
          fill={shades[2]}
        />
        <Ellipse
          cx={455.617}
          cy={203.37}
          rx={118.383}
          ry={81.1373}
          fill={shades[2]}
        />
        <Ellipse
          cx={347.695}
          cy={271.863}
          rx={96.3585}
          ry={81.1373}
          fill={shades[2]}
        />
        <Ellipse
          cx={413.77}
          cy={131.19}
          rx={96.3585}
          ry={72.1806}
          fill={shades[2]}
        />
        <Ellipse
          cx={316.86}
          cy={81.1373}
          rx={96.3585}
          ry={81.1373}
          fill={shades[2]}
        />
      </Svg>
      <Text style={{ color: 'white', position: 'absolute', fontFamily: '' }}>abcd</Text>
    </MotiView>
  );
};
