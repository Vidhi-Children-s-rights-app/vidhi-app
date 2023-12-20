import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import generator from 'generate-maze';
import Svg, { Path } from 'react-native-svg';
import { pathSprite, hedge } from '../../assets/images';

interface MazeCell {
  x: number;
  y: number;
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
  set: number;
}

const Maze = () => {
  const [maze, setMaze] = useState<MazeCell[][] | null>(null);
  const [userPosition, setUserPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let maze = generator(7, 7, true, 1236) as MazeCell[][];
    setMaze(maze);
  }, []);

  useEffect(() => {
    let { x, y } = userPosition;
    if (maze) {
      if (x === maze[0].length - 1 && y === maze.length - 1) {
        console.log('done');
      }
    }
  }, [userPosition]);

  const moveUser = (move: 'left' | 'right' | 'up' | 'down') => {
    let { x, y } = userPosition;
    if (maze) {
      if (!maze[y][x].left && move === 'left') {
        setUserPosition({ x: x - 1, y });
      }
      if (!maze[y][x].right && move === 'right') {
        setUserPosition({ x: x + 1, y });
      }
      if (!maze[y][x].top && move === 'up') {
        setUserPosition({ x, y: y - 1 });
      }
      if (!maze[y][x].bottom && move === 'down') {
        setUserPosition({ x, y: y + 1 });
      }
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#d3b165',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {maze?.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: 'row'
          }}
        >
          {row.map((cell, cellIndex) => (
            <View
              key={cellIndex}
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'transparent'
              }}
            >
              {cell.top && (
                <Image
                  source={hedge}
                  style={{
                    position: 'absolute',
                    width: 45,
                    height: 9,
                    top: -4,
                    left: -4,
                    zIndex: 10
                  }}
                />
              )}
              {cell.bottom && (
                <Image
                  source={hedge}
                  style={{
                    position: 'absolute',
                    width: 45,
                    height: 9,
                    bottom: -4,
                    left: -4,
                    zIndex: 10
                  }}
                />
              )}
              {cell.right && (
                <Image
                  source={hedge}
                  style={{
                    position: 'absolute',
                    transform: [{ rotate: '90deg' }],
                    width: 45,
                    height: 9,
                    right: -24,
                    bottom: 16,
                    zIndex: 10
                  }}
                />
              )}
              {cell.left && (
                <Image
                  source={hedge}
                  style={{
                    position: 'absolute',
                    transform: [{ rotate: '90deg' }],
                    width: 45,
                    height: 9,
                    left: -24,
                    bottom: 16,
                    zIndex: 10
                  }}
                />
              )}
              {userPosition.x === cell.x && userPosition.y === cell.y && (
                <View
                  style={{
                    position: 'absolute',
                    width: 40,
                    height: 40,
                    backgroundColor: 'red',
                    zIndex: 20
                  }}
                ></View>
              )}
              <Image source={pathSprite} style={{ height: 40, width: 40 }} />
            </View>
          ))}
        </View>
      ))}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: '10%'
        }}
      >
        <Pressable
          onPress={() => moveUser('up')}
          style={styles.controlButton}
        ></Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            onPress={() => moveUser('left')}
            style={styles.controlButton}
          ></Pressable>
          <Pressable
            onPress={() => moveUser('right')}
            style={styles.controlButton}
          ></Pressable>
        </View>
        <Pressable
          onPress={() => moveUser('down')}
          style={styles.controlButton}
        ></Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  controlButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 20
  }
});
export default Maze;
