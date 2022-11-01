import { difficulty, genre } from './commonTypes';

type trueFalseQuestion = {
	id: number;
	question: string;
	correctAnswer: boolean;
	difficulty: difficulty;
	genre: genre;
};

const trueFalseQuestions: trueFalseQuestion[] = [
	{
		id: 1,
		question: 'This is a true or false question',
		correctAnswer: true,
		difficulty: 1,
		genre: 'Math',
	},

	{
		id: 2,
		question: 'This is a true or false question',
		correctAnswer: false,
		difficulty: 1,
		genre: 'Math',
	},
	{
		id: 3,
		question: 'This is a true or false question',
		correctAnswer: true,
		difficulty: 1,
		genre: 'Math',
	},
];

export default trueFalseQuestions;
