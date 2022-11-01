interface Props {
    question: any;
}

function Numeric(props: Props) {
	const { question } = props;
	return (
		<>
			<h1>Numeric Qeustions</h1>
            <h2>{question?.question}</h2>
            <h3>{question?.answer} {question?.unit}</h3>

		</>
	);
}

export default Numeric;
