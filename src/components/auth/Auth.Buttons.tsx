import { View } from 'react-native';
import { PrimaryButton } from '../PrimaryButton';
import { StateDispatcher } from '../../types';
import { useTranslation } from 'react-i18next';

export const Buttons: React.FC<{
  buttons: string[];
  onTap: (params: any) => any;
  setIsTyping: StateDispatcher<boolean>;
}> = ({ buttons, onTap, setIsTyping }) => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        position: 'absolute',
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        bottom: 0
      }}
    >
      {buttons.map((text, index) => (
        <PrimaryButton
          key={index}
          variant={{
            color: text.toLowerCase() === 'yes' ? 'green' : 'orange',
            size: 'small',
            highlight: false
          }}
          onTap={() => {
            setTimeout(() => {
              onTap(index);
              setIsTyping(true);
            }, 500);
          }}
        >
          {t(text)}
        </PrimaryButton>
      ))}
    </View>
  );
};
