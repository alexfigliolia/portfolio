import $ from 'jquery';

const initialState = {
	height: window.innerHeight,
  width: window.innerWidth,
  moveX: null,
  transDur: '0s',
}

const resizeCanvas = (nodes, height) => {
	for(let i = 0; i < nodes.length; i++) {
		if(nodes[i]) {
			nodes[i].css('height', height + 'px');
			nodes[i].find('canvas').prop('height', height);
			nodes[i].ripples({
	        resolution: 512,
	        dropRadius: 10, 
	        perturbance: 0.02,
	    });
		}
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_MOVE_X':
			return Object.assign({}, state, { moveX: action.moveX });
		case 'UPDATE_DIMENSIONS':
			const { innerHeight, innerWidth } = window;
			const home = $('#home');
			const contact = $('#contact');
			resizeCanvas([home, contact], innerHeight);
			return Object.assign({}, state, {
				height: innerHeight,
				width: innerWidth
			});
		case 'MOVE_PAGE':
			return Object.assign({}, state, {
				moveX: action.moveX,
				transDur: '0s',
			});
		case 'ENTER_PAGE':
			return Object.assign({}, state, {
				moveX: action.moveX,
				transDur: '0.5s'
			});
		default: 
			return state;
	}
}