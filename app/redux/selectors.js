import { ROLE_ADMIN, STATUS_BOOK } from '../constants/action';

export const getUrgentRooms = (state) => {
	const allRoomNumber = state.queueNumbers;
	const keys = Object.keys(allRoomNumber);
	const urgentRooms = keys.filter(key => allRoomNumber[key] === STATUS_BOOK );
	return urgentRooms;
};

export const userIsAdmin = (user) => {
	return user && user.role === ROLE_ADMIN;
};