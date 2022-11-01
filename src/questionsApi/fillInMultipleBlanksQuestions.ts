import { difficulty, genre } from './commonTypes';

type fillInSentencePortion = {
	type: 'text' | 'blank';
	text: string | null;
	answer: number | null;
};

type fillInMultipleBlanksQuestion = {
	id: number;
	answersBank: string[];
	question: fillInSentencePortion[];
	difficulty: difficulty;
	genre: genre;
};

const fillInMultipleBlanksQuestions: fillInMultipleBlanksQuestion[] = [
	{
		id: 1,
		answersBank: ['Paris', 'London', 'Berlin', 'Rome'],
		question: [
			{
				type: 'text',
				text: 'The capital of France is ',
				answer: null,
			},
			{
				type: 'blank',
				text: null,
				answer: 0,
			},
			{
				type: 'text',
				text: ', the capital of Germany is ',
				answer: null,
			},
			{
				type: 'blank',
				text: null,
				answer: 2,
			},
			{
				type: 'text',
				text: ', and the capital of Italy is ',
				answer: null,
			},

			{
				type: 'blank',
				text: null,
				answer: 3,
			},
			{
				type: 'text',
				text: '.',
				answer: null,
			},
		],
		difficulty: 1,
		genre: 'Geography',
	},
];

export default fillInMultipleBlanksQuestions;
