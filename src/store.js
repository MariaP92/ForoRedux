import createStore from "redux-zero";

let Comments = [
	{
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
		name: "Morgan McCircuit",
		comment: "Excellent Stuff",
		id: 1
	},
	{
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
		name: "Bending Bender",
		comment: "Excellent Stuff",
		id: 2
	},
];
const initialState = {
	comments: Comments,
	selectedCommentIndex: -1
};

const store = createStore(initialState);

export default store;
