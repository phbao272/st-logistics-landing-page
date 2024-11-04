import { atom } from 'jotai';

export const activeTabAtom = atom<string>('');
export type ActiveTabAtomType = ReturnType<typeof atom<string>>;

export const changeActiveTabAtom = atom(null, (_, set, tab: string) => {
  set(activeTabAtom, tab);
});
