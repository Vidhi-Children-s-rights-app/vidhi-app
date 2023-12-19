import { View, Text } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import generator from 'generate-maze';

const Maze = () => {
  const [maze, setMaze] = useState<number[]>([]);
  useEffect(() => {
    setMaze(generator(6, 6) as number[]);
  }, []);
  return (
    <View>
      <Text>Maze</Text>
    </View>
  );
};

export default Maze;
