export const enterApp = () => {
	return dispatch => {
		setTimeout(() => { 
      dispatch({ type: 'FACE_FORWARD' });
      setTimeout(() => {
        dispatch(setHomeClasses());
        setTimeout(() => dispatch({ type: 'FILL_SCREEN', loaded: true }), 600);
      }, 400);
    }, 1000);
	}
}

export const setHomeClasses = () => {
	return dispatch => {
		setTimeout(() => dispatch({ type: 'ENTER_HOME' }), 2000);
    setTimeout(() => dispatch({ type: 'RESET_HOME_DELAYS' }), 2500);
	}
}

export const setContactClasses = () => {
	return dispatch => {
		setTimeout(() => dispatch({ type: 'ENTER_CONTACT' }), 2000);
    setTimeout(() => dispatch({ type: 'RESET_CONTACT_DELAYS' }), 2500);
	}
}

export const leaveHome = () => {
	return { type: 'LEAVE_HOME' };
}

export const leaveContact = () => {
	return { type: 'LEAVE_CONTACT' };
}

export const toggleBurger = () => {
	return { type: 'TOGGLE_BURGER' };
}

export const scaleOut = () => {
	return { type: 'SCALE_OUT' };
}

export const navigate = page => {
	return (dispatch, getState) => {
		const { page: currentPage, menuOpen } = getState().Classes; 
		const int = menuOpen ? 0 : 800;
		if(int > 0) dispatch(toggleBurger());
		if(page !== currentPage) {
			setTimeout(() => dispatch(scaleOut()), int);
	    setTimeout(() => dispatch({ type: 'ROTATE_APP' }), int + 750);
	    setTimeout(() => dispatch({ type: 'SHOW_LOADER' }), int + 900);
	    setTimeout(() => dispatch({ type: 'SET_PAGE', page }), int + 1500);
		}
	}
}

export const arriveAtScreen = (timeLeft = 0) => {
	return dispatch => {
		dispatch({ type: 'LOADED' });
		setTimeout(() => dispatch(scaleOut()), timeLeft);
	  setTimeout(() => dispatch({ type: 'HIDE_LOADER' }), timeLeft + 200);
	  setTimeout(() => dispatch({ type: 'FILL_SCREEN' }), timeLeft + 750);
	}
}

export const setPage = page => {
	return { type: 'SET_PAGE', page };
}