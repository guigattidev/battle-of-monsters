import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster, Battle, Winner } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import type { RootState, AppDispatch } from '../../app/store';


export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleData = createAsyncThunk<Winner | null, Battle, { state: RootState, dispatch: AppDispatch }>(
  'monsters/fetchBattleData',
  MonsterService.postBattle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);
