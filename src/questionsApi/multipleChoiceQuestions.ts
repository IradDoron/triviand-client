import { difficulty, genre } from './commonTypes';

type multipleChoiceQuestion = {
	id: number;
	question: string;
	answers: string[];
	correctAnswer: number;
	difficulty: difficulty;
	genre: genre;
};

const trivia: multipleChoiceQuestion[] = [
	{
		id: 1,
		question: 'What food was used in WW2 to make bombs by extracting glycerin?',
		answers: ['Dried fruits', 'Bacon', 'Mustard', 'Yogurt', 'Paprika'],
		correctAnswer: 1,
		difficulty: 3,
		genre: 'Trivia',
	},
];

const multipleChoiceQuestions: multipleChoiceQuestion[] = [...trivia];

export default multipleChoiceQuestions;
