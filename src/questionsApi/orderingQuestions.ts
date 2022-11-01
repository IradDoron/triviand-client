import { difficulty, genre } from './commonTypes';

type orderingQuestion = {
	id: number;
	question: string;
	answers: string[];
	correctOrder: number[];
	difficulty: difficulty;
	genre: genre;
};

const orderingQuestions: orderingQuestion[] = [
	{
		id: 1,
		question: 'Order the following items',
		answers: ['Paris', 'London', 'Berlin', 'Rome'],
		correctOrder: [0, 1, 2, 3],
		difficulty: 1,
		genre: 'Geography',
	},
	{
		id: 2,
		question: 'Order the following items',
		answers: ['Paris', 'London', 'Berlin', 'Rome'],
		correctOrder: [0, 1, 2, 3],
		difficulty: 1,
		genre: 'Geography',
	},
];

export default orderingQuestions;
