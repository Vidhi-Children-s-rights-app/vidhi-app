import { Image, Pressable } from 'react-native';
import { router } from 'expo-router';

import { icons } from '../../assets/images';

const Icon: React.FC<{
  route: string;
  children: React.ReactNode;
}> = ({ route, children }) => {
  return (
    <Pressable
      style={{
        height: '100%',
        aspectRatio: 1
      }}
      onTouchEnd={() => {
        router.replace(route);
      }}
    >
      {children}
    </Pressable>
  );
};

export const HomeIcon: React.FC = () => (
  <Icon route="/">
    <Image
      source={icons.home}
      style={{
        height: '100%',
        width: '100%'
      }}
    />
  </Icon>
);

export const MenuIcon: React.FC = () => (
  <Icon route="/menu">
    <Image
      source={icons.menu}
      style={{
        height: '100%',
        width: '100%'
      }}
    />
  </Icon>
);

export const ArchivesIcon: React.FC = () => (
  <Icon route="/archives">
    <Image
      source={icons.archives}
      style={{
        height: '100%',
        width: '100%'
      }}
    />
  </Icon>
);

export const QuizIcon: React.FC = () => (
  <Icon route="/quiz">
    <Image
      source={icons.quiz}
      style={{
        height: '100%',
        width: '100%',
        transform: [{ scale: 1.5 }]
      }}
    />
  </Icon>
);

export const CommunityIcon: React.FC = () => (
  <Icon route="/community">
    <Image
      source={icons.community}
      style={{
        height: '100%',
        width: '100%',
        transform: [{ scale: 1.2 }]
      }}
    />
  </Icon>
);

export const Icons = [
  HomeIcon,
  MenuIcon,
  ArchivesIcon,
  QuizIcon,
  CommunityIcon
];
