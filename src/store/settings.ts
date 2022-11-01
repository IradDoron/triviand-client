import { atom } from 'recoil';

export const currLangState = atom({
	key: 'currLangState',
	default: 'en',
});

export const currDirState = atom({
	key: 'currDirState',
	default: 'ltr',
});
