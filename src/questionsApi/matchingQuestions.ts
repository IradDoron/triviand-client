import { difficulty, genre } from './commonTypes';

type matchingItem = {
	item: string;
	match: number;
};
type matchingQuestion = {
	id: number;
	instruction: string;
	matchingAnswers: string[];
	matchingItems: matchingItem[];
	difficulty: difficulty;
	genre: genre;
};

const matchingQuestions: matchingQuestion[] = [
	{
		id: 1,
		instruction: 'Match the following items',
		matchingAnswers: ['Paris', 'London', 'Berlin', 'Rome'],
		matchingItems: [
			{
				item: 'France',
				match: 0,
			},
			{
				item: 'Germany',
				match: 2,
			},
			{
				item: 'Italy',
				match: 3,
			},
		],
		difficulty: 1,
		genre: 'Geography',
	},
	{
		id: 2,
		instruction: 'Match the following items',
		matchingAnswers: ['Paris', 'London', 'Berlin', 'Rome'],
		matchingItems: [
			{
				item: 'France',
				match: 0,
			},
			{
				item: 'Germany',
				match: 2,
			},
			{
				item: 'Italy',
				match: 3,
			},
		],
		difficulty: 1,
		genre: 'Geography',
	},
];

export default matchingQuestions;
