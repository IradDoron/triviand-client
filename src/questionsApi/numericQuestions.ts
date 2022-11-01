import { difficulty, genre } from './commonTypes';

type numericQuestion = {
	id: number;
	question: string;
	answer: number;
	unit: string;
	explanation: string;
	difficulty: difficulty;
	genre: genre;
};

const trivia: numericQuestion[] = [
	{
		id: 1,
		question: 'How old is the oldest living tortoise?',
		answer: 190,
		unit: 'years',
		explanation:
			'The oldest living tortoise is a Galapagos tortoise named Jonathan. He was born in 1835 and is currently 190 years old.',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 2,
		question: 'What is the length of the tallest waterfall?',
		answer: 979,
		unit: 'meters',
		explanation:
			'The tallest waterfall is Angel Falls in Venezuela. It is 979 meters tall.',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 3,
		question:
			'How many fingers does the man with most fingers have including toes?',
		answer: 28,
		unit: 'fingers',
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 4,
		question: `What is the Rubik's cube one handed world record?`,
		answer: 6.82,
		unit: 'seconds',
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 5,
		question: 'At what age did David Ben-Gurion come to Israel?',
		answer: 20,
		unit: 'years',
		explanation: '',
		difficulty: 3,
		genre: 'Israel',
	},
	{
		id: 6,
		question: 'How many hours does horse sleep?',
		answer: 2.9,
		unit: 'hours',
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 7,
		question: 'How many times does the heart beat in a lifetime?',
		answer: 2.5,
		unit: 'billion',
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 8,
		question: 'How much water is in sea water?',
		answer: 96.5,
		unit: '%',
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
];

const numericQuestions: numericQuestion[] = [...trivia];

export default numericQuestions;
