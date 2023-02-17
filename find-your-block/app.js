const searchBlocks = document.querySelector('.search-carnaval-block');
const findResultButton = document.querySelector('.find-result');
const carnavalBlocks = Array.from(document.querySelectorAll('.carnaval-blocks .card'));

function getResults(event) {
	const inputValue = searchBlocks.value;
	if(inputValue.length > 0) {
		const carnavalBlocksResult = carnavalBlocks.filter((carnavalBlock) => 
			carnavalBlock.children[1].children[0].textContent.toLowerCase().includes(inputValue.toLowerCase()) && carnavalBlock);

		return carnavalBlocksResult[0];
	}
}

function handleShowResults() {;
	const result = getResults();
	const carnavalBlocksContainer = document.querySelector('.carnaval-blocks');

	if(result !== undefined) {
		carnavalBlocks.forEach(card => { 
			 card.id !== result.id && card.classList.add('hide');
			 card.id === result.id && card.classList.contains('hide') && card.classList.remove('hide');
		});
	} else {
		carnavalBlocks.forEach(card => card.classList.remove('hide'));
	}
}

searchBlocks.addEventListener('change', getResults);
findResultButton.addEventListener('click', handleShowResults);
