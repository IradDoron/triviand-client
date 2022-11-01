import getDifferentRandomItemFromArray from 'utils/other/getDifferentRandomItemFromArray';
import getQuestionsCollectionByTypeAndGenres from 'utils/questions/getQuestionsCollectionByTypeAndGenres';

import QBoxes from 'components/QBoxes';

import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { currDirState, currLangState } from 'store/settings';

function App() {
	const [questionsCollection, setQuestionsCollection] = useState<any>([]);
	const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
	const [currQuestion, setCurrQuestion] = useState<any>(null);

	const setCurrLang = useSetRecoilState(currLangState);
	const [currDir, setCurrDir] = useRecoilState(currDirState);

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

	const handleLangChange = (newLang: string) => {
		setCurrLang(newLang);
		switch (newLang) {
			case 'he':
				setCurrDir('rtl');
				break;
			case 'en':
				setCurrDir('ltr');
				break;
		}
	};

	return (
		<div dir={currDir}>
			<div>
				<button onClick={() => handleLangChange('he')}>עברית</button>
				<button onClick={() => handleLangChange('en')}>English</button>
			</div>
			<QBoxes.Numeric question={currQuestion} />
			<button onClick={handleNextQuestionClick}>Next</button>
		</div>
	);
}

export default App;
