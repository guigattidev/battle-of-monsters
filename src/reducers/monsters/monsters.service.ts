import { API_URL } from '../../constants/env';
import { Monster, Battle, Winner } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (data: Battle): Promise<Winner> =>
  await fetch(`${API_URL}/battle`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  postBattle
};
