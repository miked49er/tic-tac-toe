import React, { useState } from 'react';
import { Player } from '@/util/game';
import TicTacToe from '@/app/components/TicTacToe';
import NewGame from '@/app/components/NewGame';

const Index = () => {
  const [winner, setWinner] = useState<Player>(null);
  const [playerFirst, setPlayerFirst] = useState<boolean>(true);
  const [gameStart, setGameStart] = useState<boolean>(false);

  const startGame = (first: boolean) => {
    setPlayerFirst(first);
    setGameStart(true);
  };

  if (gameStart) {
    return (
      <TicTacToe
        playerFirst={playerFirst}
        setWinner={setWinner}
        onGameOver={() => setGameStart(false)}
      />
    );
  }
  return <NewGame winner={winner} setPlayerFirst={startGame} />;
};

Index.propTypes = {};

export default Index;
