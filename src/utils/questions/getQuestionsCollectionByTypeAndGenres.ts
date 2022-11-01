import questionsApi from 'questionsApi';

type QuestionType =
	| 'numeric'
	| 'multipleChoice'
	| 'multipleAnswer'
	| 'trueFalse'
	| 'fillInMultipleBlanks'
	| 'matching'
	| 'ordering'
	| 'calculatedFormula';

type Genre =
	| 'Math'
	| 'Science'
	| 'History'
	| 'Geography'
	| 'Art'
	| 'Music'
	| 'Trivia';

const getQuestionsCollectionByTypeAndGenres = (
	type: QuestionType,
	genres: Genre[]
) => {
	// type is a string that is one of the keys in the questionsApi object
	// genres is an array of strings that are similar to the value of the 'genre' key in the questionsApi object

	const questions = [...questionsApi[type]];

	// filter out questions that are not in the genres array

	const filteredQuestions = questions.filter((question: any) => {
		return genres.includes(question.genre);
	});

	return filteredQuestions;
};

export default getQuestionsCollectionByTypeAndGenres;

// Path: src/utils/getQuestionCollection.ts
