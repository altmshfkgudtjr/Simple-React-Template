import { produce } from 'immer'

// setTimeout 참조 넣어두는 리스트
const RefEvent = [];

/*
	Thunk Actions
*/
export const newSnackbar = (text, type) => async dispatch => {
	// 만약 스낵바가 이미 열려있으면?
	if(RefEvent.length !== 0) {
		// 이전 스낵바의 Timeout 이벤트 참조를 꺼내서
		let event = RefEvent.shift();
		// 제거한다.
		clearTimeout(event);
	}
	// 새로운 스낵바를 위해서 이전 스낵바를 제거한다.
	dispatch(deleteSnackbar());
	// 스낵바가 새롭게 열리는 Animation을 위해서 50ms 후에 진행.
	await setTimeout(function() {
		// 스낵바 정보를 업데이트 한다.
		dispatch(appendSnackbar({text: text, 'type': type ? type : 'default'}));
		// setTimeout 이벤트를 실행하고 참조를 RefEvent 리스트에 저장한다.
		let event = setTimeout(function() {
			dispatch(deleteSnackbar());
		}, 4000);
		RefEvent.push(event);
	}, 50);
}


/*
	Actions
*/
const APPEND_SNACKBAR = 'snackbar/APPEND_SNACKBAR';	// 스낵바 추가
const DELETE_SNACKBAR = 'snackbar/DELETE_SNACKBAR';	// 스낵바 삭제

export const appendSnackbar = (data)=> ({ type: APPEND_SNACKBAR, payload: data });
export const deleteSnackbar = ()=> ({ type: DELETE_SNACKBAR});


/*
	InitialState
*/
const initialState = {
	show: false,
	text: '',
	type: 'info'
};


/*
	Reducer
*/
export default function snackbar(state = initialState, action) {
	switch(action.type) {
		case APPEND_SNACKBAR:
			/* 스낵바 추가하기 */
			return produce(state, draft => {
				draft.show = true;
				draft.text = action.payload['text'];
				draft.type = action.payload['type'];
			});

		case DELETE_SNACKBAR:
			/* 스낵바 삭제하기 */
			return produce(state, draft => {
				draft.show = false;
				draft.text = '';
				draft.type = 'info';
			});
			
		default:
			return state;
	}
}