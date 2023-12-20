import { View, Text, Pressable } from 'react-native';
import JumbledArrayElements from '../constants/data/jumble';
import { AuthModalColors as COLORS, FOTD } from '../constants';
import { PrimaryButton } from './PrimaryButton';
import { useState } from 'react';

export const JumbleGame: React.FC = () => {
  const [state, setState] = useState(JumbledArrayElements());
  const [lastMove, setLastMove] = useState<{ i: number; j: number }>({
    i: -2,
    j: -2
  });
  const [firstMove, setFirstMove] = useState(true);
  const [myString, setMyString] = useState('');
  const possible = (i: number, j: number) => {
    if (
      Math.abs(i - lastMove.i) <= 1 &&
      Math.abs(j - lastMove.j) <= 1 &&
      !(Math.abs(i - lastMove.i) === 1 && Math.abs(j - lastMove.j) === 1)
    ) {
      return true;
    }
    return false;
  };
  const reset = () => {
    setMyString('');
    setFirstMove(true);
    setLastMove({ i: -2, j: -2 });
    setState(JumbledArrayElements());
  };
  const setVisited = (r: number, c: number) => {
    if ((possible(r, c) || firstMove) && !state[r][c].visited) {
      let copy = [...state];
      copy[r][c].visited = true;
      setLastMove({ i: r, j: c });
      setFirstMove(false);
      setState(copy);
      setMyString(myString + copy[r][c].char);
    }
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PrimaryButton
          variant={{ size: 'large', color: 'orange' }}
          onTap={() => {
            console.log(myString);
            reset();
          }}
        >
          Enter
        </PrimaryButton>
      </View>
    </View>
  );
};
