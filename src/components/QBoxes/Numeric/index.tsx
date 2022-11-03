import { currLangState } from 'store/settings';

import { useRecoilValue } from 'recoil';

import { Box, Typography } from '@mui/material';

interface Props {
	question: any;
}

function Numeric(props: Props) {
	const { question } = props;

	const currLang = useRecoilValue(currLangState);

	return (
		<>
			<Box sx={{ minHeight: 200, display: 'flex' }}>
				<Typography
					variant="h3"
					textAlign="center"
					maxWidth="900px"
					margin="auto"
				>
					{question?.question[currLang]}
				</Typography>
			</Box>
			<Typography variant="subtitle1">
				{question?.answer}{' '}
				{question?.unit[currLang]
					? question?.unit[currLang]
					: question?.unit.__default}
			</Typography>
		</>
	);
}

export default Numeric;
