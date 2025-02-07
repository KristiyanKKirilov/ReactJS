import { useEffect, useState } from "react";
import gamesAPI from "../api/games-api";
import Game from "../types/Game";
import { v4 as uuidv4 } from "uuid";


export function useGetAllGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    gamesAPI.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  return [games];
}

export function useGetOneGame(gameId: string) {

  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (gameId) {
      gamesAPI.getOne(gameId).then((game) => setGame(game));
      // commentsApi.getAll(gameId).then((comments) => setComments(comments));
    }
  }, [gameId]);

  return [game, setGame];
}

