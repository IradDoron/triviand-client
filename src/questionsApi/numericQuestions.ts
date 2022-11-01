import { difficulty, genre } from './commonTypes';

type numericQuestion = {
	id: number;
	question: { [key: string]: string };
	answer: number;
	unit: { [key: string]: string };
	explanation: string;
	difficulty: difficulty;
	genre: genre;
};

const trivia: numericQuestion[] = [
	{
		id: 1,
		question: {
			en: 'How old is the oldest living tortoise?',
			he: 'מהו גילו של הצב הזקן ביותר שחי בעולם?',
		},
		answer: 190,
		unit: { en: 'years', he: 'שנים' },
		explanation:
			'The oldest living tortoise is a Galapagos tortoise named Jonathan. He was born in 1835 and is currently 190 years old.',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 2,
		question: {
			en: 'What is the length of the tallest waterfall?',
			he: 'מהו הגובה של מפל המים הגבוה ביותר בעולם?',
		},
		answer: 979,
		unit: { en: 'meters', he: 'מטרים' },
		explanation:
			'The tallest waterfall is Angel Falls in Venezuela. It is 979 meters tall.',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 3,
		question: {
			en: 'How many fingers does the man with most fingers have including toes?',
			he: 'כמה אצבעות יש לאדם עם הכי הרבה אצבעות כולל רגליים?',
		},
		answer: 28,
		unit: { en: 'fingers', he: 'אצבעות' },
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 4,
		question: {
			en: `What is the Rubik's cube one handed world record?`,
			he: 'מהו השיא לפתירת קובייה הונגרית ביד אחת?',
		},
		answer: 6.82,
		unit: { en: 'seconds', he: 'שניות' },
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 5,
		question: {
			en: 'At what age did David Ben-Gurion come to Israel?',
			he: 'באיזה גיל הגיע דוד בן-גוריון לישראל?',
		},
		answer: 20,
		unit: { en: 'years', he: 'שנים' },
		explanation: '',
		difficulty: 3,
		genre: 'Israel',
	},
	{
		id: 6,
		question: {
			en: 'How many hours does horse sleep?',
			he: 'כמה שעות סוס ישן ביממה?',
		},
		answer: 2.9,
		unit: { en: 'hours', he: 'שעות' },
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 7,
		question: {
			en: 'How many times does the heart beat in a lifetime?',
			he: 'כמה פעמים פועל הלב במשך זמן חיים ממוצע?',
		},
		answer: 2.5,
		unit: { en: 'billion', he: 'מיליארד' },
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
	{
		id: 8,
		question: {
			en: 'How much water is in sea water?',
			he: 'כמה מים יש במי ים?',
		},
		answer: 96.5,
		unit: { __default: '%' },
		explanation: '',
		difficulty: 3,
		genre: 'Trivia',
	},
];

const numericQuestions: numericQuestion[] = [...trivia];

export default numericQuestions;
