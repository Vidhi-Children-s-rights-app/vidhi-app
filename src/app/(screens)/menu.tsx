import { Text } from 'react-native';
import { NavLayout } from '../../components/layout';

export default function Menu() {
  return (
    <NavLayout currentScreen={1}>
      <Text>This is Menu</Text>
    </NavLayout>
  );
}
