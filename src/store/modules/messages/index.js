import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			inboxMessages: [],
			unreadMessages: [],
			userMentions: [],
			userMessages: [],
			postReplies: [],
			sentMessages: [],
			suggestedSender: [],
		};
	},
	mutations,
	actions,
	getters,
};
