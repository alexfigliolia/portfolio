const initialState = {
	appClasses: 'App App-drop App-rotate',
  burgerClasses: 'hamburglar is-open',
  menuOpen: false,
  loaderClasses: 'loader loader-show',
  homeClasses: 'home',
  contactClasses: 'home contact',
  pastInitLoad: false,
  page: 'Home',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FACE_FORWARD':
			return Object.assign({}, state, {
				appClasses: 'App App-drop', 
				loaderClasses: 'loader'
			});
		case 'FILL_SCREEN':
			return Object.assign({}, state, {
				appClasses: 'App', 
				pastInitLoad: action.loaded ? true : state.pastInitLoad
			});
		case 'ENTER_HOME':
			return Object.assign({}, state, { homeClasses: 'home home-show' });
		case 'RESET_HOME_DELAYS':
			return Object.assign({}, state, { 
			  homeClasses: 'home home-show home-reset-delays'
			});
		case 'LEAVE_HOME':
			return Object.assign({}, state, { homeClasses: 'home' });
		case 'ENTER_CONTACT':
			return Object.assign({}, state, { contactClasses: 'home contact contact-show' });
		case 'RESET_CONTACT_DELAYS':
			return Object.assign({}, state, { 
			  contactClasses: 'home contact contact-show contact-reset-delays'
			});
		case 'LEAVE_CONTACT':
			return Object.assign({}, state, { contactClasses: 'home contact'});
		case 'TOGGLE_BURGER':
			return Object.assign({}, state, { menuOpen: !state.menuOpen });
		case 'SCALE_OUT':
			return Object.assign({}, state, { appClasses: 'App App-drop' });
		case 'ROTATE_APP':
			return Object.assign({}, state, { appClasses: 'App App-drop App-rotate' });
		case 'SHOW_LOADER':
			return Object.assign({}, state, { loaderClasses: 'loader loader-show' });
		case 'HIDE_LOADER':
			return Object.assign({}, state, { loaderClasses: 'loader' });
		case 'SET_PAGE':
			return Object.assign({}, state, { page: action.page });
		case 'LOADED':
			return Object.assign({}, state, { pastInitLoad: true });
		default:
			return state;
	}
}