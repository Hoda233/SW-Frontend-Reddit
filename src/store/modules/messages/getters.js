export default {
	composeMessages(state) {
		return state.allMessages;
	},
	unreadMessages(state) {
		return state.unreadMessages;
	},
	userMentions(state) {
		return state.userMentions;
	},
	userMessages(state) {
		return state.userMessages;
	},
	postReplies(state) {
		return state.postReplies;
	},
};
