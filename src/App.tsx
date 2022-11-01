import getDifferentRandomItemFromArray from 'utils/other/getDifferentRandomItemFromArray';
import getQuestionsCollectionByTypeAndGenres from 'utils/questions/getQuestionsCollectionByTypeAndGenres';

import QBoxes from 'components/QBoxes';

import { useEffect, useState } from 'react';

function App() {
	const [questionsCollection, setQuestionsCollection] = useState<any>([]);
	const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
	const [currQuestion, setCurrQuestion] = useState<any>(null);

	useEffect(() => {
		const questionsCollection = getQuestionsCollectionByTypeAndGenres(
			'numeric',
			['Trivia']
		);
		setQuestionsCollection(questionsCollection);
	}, []);

	useEffect(() => {
		setCurrQuestion(questionsCollection[currQuestionIndex]);
	}, [currQuestionIndex, questionsCollection]);

	const handleNextQuestionClick = () => {
		const [newQuestion, newIndex] = getDifferentRandomItemFromArray(
			questionsCollection,
			currQuestionIndex
		);
		setCurrQuestion(newQuestion);
		setCurrQuestionIndex(newIndex);
	};

	return (
		<>
			<QBoxes.Numeric question={currQuestion}  />
			<button onClick={handleNextQuestionClick}>Next</button>
		</>
	);
}

export default App;
