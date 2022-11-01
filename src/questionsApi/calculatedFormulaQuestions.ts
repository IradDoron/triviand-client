import { difficulty, genre } from './commonTypes';

type calculatedFormulaQuestion = {
	id: number;
	question: string;
	formula: string;
	correctAnswer: number;
	difficulty: difficulty;
	genre: genre;
};

const calculatedFormulaQuestions: calculatedFormulaQuestion[] = [
	{
		id: 1,
		question: 'What is the result of the following formula?',
		formula: '2 + 2',
		correctAnswer: 4,
		difficulty: 1,
		genre: 'Math',
	},
	{
		id: 2,
		question: 'What is the result of the following formula?',
		formula: '2 + 2',
		correctAnswer: 4,
		difficulty: 1,
		genre: 'Math',
	},
];

export default calculatedFormulaQuestions;
