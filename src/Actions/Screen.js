export const updateDimensions = () => {
	return { type: 'UPDATE_DIMENSIONS' };
}

export const updateMoveX = moveX => {
	return { type: 'UPDATE_MOVE_X', moveX };
}

export const movePage = moveX => {
	return { type: 'MOVE_PAGE', moveX };
}

export const enterPage = moveX => {
	return { type: 'MOVE_PAGE', moveX };
}
