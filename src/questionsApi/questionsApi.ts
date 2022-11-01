import calculatedFormulaQuestions from './calculatedFormulaQuestions';
import fillInMultipleBlanksQuestions from './fillInMultipleBlanksQuestions';
import matchingQuestions from './matchingQuestions';
import multipleAnswerQuestions from './multipleAnswerQuestions';
import multipleChoiceQuestions from './multipleChoiceQuestions';
import numericQuestions from './numericQuestions';
import orderingQuestions from './orderingQuestions';
import trueFalseQuestions from './trueFalseQuestions';

const questionsApi = {
	calculatedFormula: calculatedFormulaQuestions,
	fillInMultipleBlanks: fillInMultipleBlanksQuestions,
	matching: matchingQuestions,
	multipleAnswer: multipleAnswerQuestions,
	multipleChoice: multipleChoiceQuestions,
	numeric: numericQuestions,
	ordering: orderingQuestions,
	trueFalse: trueFalseQuestions,
};

export default questionsApi;