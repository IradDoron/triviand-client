import getRandomNumberInRange from 'utils/math/getRandomNumberInRange';

const getDifferentRandomItemFromArray = (
	array: any[],
	currIndex: number
): any => {
	if (array.length === 1) {
		return [array[0], 0];
	} else {
		const randomIndex = getRandomNumberInRange(0, array.length - 1);

		if (randomIndex === currIndex) {
			return getDifferentRandomItemFromArray(array, currIndex);
		}

		return [array[randomIndex], randomIndex];
	}
};

export default getDifferentRandomItemFromArray;
