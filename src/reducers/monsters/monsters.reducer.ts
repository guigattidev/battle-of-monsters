import { createReducer } from '@reduxjs/toolkit';
import { Monster, Winner } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, fetchBattleData, setSelectedMonster, setComputerMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  battle: Winner | null;
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  battle: null,
  selectedMonster: null,
  computerMonster: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(fetchBattleData.fulfilled, (state, action) => ({
    ...state,
    battle: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
  }));
});
