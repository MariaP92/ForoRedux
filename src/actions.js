import store from "./store";

export const addComment = (name, comment) =>{
	const addCommentList = store.getState().comments.concat(  {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
		name: name,
        comment: comment,
        id : store.getState().comments.length + 1   
	});

	store.setState({
		comments: addCommentList
	})
}

export const removeComment = (index) => {
	const addcoomentList =  store.getState().comments.filter( (item, ids) => ids != index );

	store.setState({
		comments: addcoomentList
	})
}


export const selectComment= (index) => {
		store.setState({
			selectedCommentIndex : index
		})
	}