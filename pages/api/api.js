let picks = [];
const delay = () => new Promise(res => setTimeout(() => res(), 800));

export async function getPicks() {
	await delay();
	return picks;
}

export async function addPick(pick) {
	await delay();
	picks = [...picks, pick];
	return picks;
}
