
import { currLangState } from 'store/settings';

import { useRecoilValue } from 'recoil';

interface Props {
	question: any;
}

function Numeric(props: Props) {
	const { question } = props;

    const currLang = useRecoilValue(currLangState);

	return (
		<>
			<h1>Numeric Qeustions</h1>
			<h2>{question?.question[currLang]}</h2>
			<h3>
				{question?.answer}{' '}
				{question?.unit[currLang]
					? question?.unit[currLang]
					: question?.unit.__default}
			</h3>
		</>
	);
}

export default Numeric;
