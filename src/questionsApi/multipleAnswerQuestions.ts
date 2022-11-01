
import { difficulty, genre } from './commonTypes';


type multipleAnswerQuestion = {
	id: number;
	question: string;
	answers: string[];
	correctAnswers: number[];
	difficulty: difficulty;
	genre: genre;
};

 const multipleAnswerQuestions: multipleAnswerQuestion[] = [
	{
		id: 1,
		question: 'What are the capitals of France, Germany and Italy?',
		answers: ['Paris', 'London', 'Berlin', 'Rome'],
		correctAnswers: [0, 2, 3],
		difficulty: 1,
		genre: 'Geography',
	},
	{
		id: 2,
		question: 'What are the capitals of France, Germany and Italy?',
		answers: ['Paris', 'London', 'Berlin', 'Rome'],
		correctAnswers: [0, 2, 3],
		difficulty: 1,
		genre: 'Geography',
	},
];

export default multipleAnswerQuestions;