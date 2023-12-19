import { View, Text, Pressable } from 'react-native';
import { JumbledArrayElements as data } from '../constants/data/jumble';
import { AuthModalColors as COLORS } from '../constants';
import { PrimaryButton } from './PrimaryButton';
import { useState } from 'react';

export const JumbleGame: React.FC = () => {
  const [state, setState] = useState(data);

  const setVisited = (r: number, c: number) => {
    let copy = state;
    copy[r][c].visited = true;
    setState(copy);
  };

  return (
    <View
      style={{
        width: '80%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '20%'
      }}
    >
      <View
        style={{
          width: '100%',
          aspectRatio: 1,
          backgroundColor: COLORS['background'],
          borderRadius: 10,
          borderWidth: 2,
          borderColor: COLORS['shadow'],
          overflow: 'hidden'
        }}
      >
        {state?.map((row, rowIndex) => {
          return (
            <View
              key={rowIndex}
              style={{
                width: '100%',
                height: '20%',
                flexDirection: 'row'
              }}
            >
              {row?.map((cell, cellIndex) => {
                return (
                  <Pressable
                    key={cellIndex}
                    style={{
                      width: '20%',
                      aspectRatio: 1,
                      padding: '4%',
                      backgroundColor: state[rowIndex][cellIndex].visited
                        ? COLORS['shadow']
                        : COLORS['background']
                    }}
                    onTouchStart={() => {
                      setVisited(rowIndex, cellIndex);
                      console.log('Press', state[rowIndex][cellIndex]);
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 24,
                        color: COLORS['text'],
                        fontFamily: 'heading'
                      }}
                    >
                      {cell.char.toUpperCase()}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          );
        })}
      </View>
      <PrimaryButton
        variant={{ size: 'large', color: 'orange' }}
        onTap={() => {
          setState(data);
        }}
      >
        Enter
      </PrimaryButton>
    </View>
  );
};
