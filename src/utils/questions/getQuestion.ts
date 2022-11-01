import questionsApi from '../../questionsApi';

type QuestionType =
	| 'numeric'
	| 'multipleChoice'
	| 'multipleAnswer'
	| 'trueFalse'
	| 'fillInMultipleBlanks'
	| 'matching'
	| 'ordering'
	| 'calculatedFormula';

type Genre = 'Math' | 'Science' | 'History' | 'Geography' | 'Art' | 'Music';

const getQuestion = (type: QuestionType, genres: Genre[]) => {

};

export default getQuestion;
