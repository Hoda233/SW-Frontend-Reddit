import {mount} from '@vue/test-utils';
import {shallowMount} from '@vue/test-utils';
import MessagesInbox from '../../src/pages/messages/MessagesInbox.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import {describe, it, expect} from 'vitest';
describe ('MessagesInbox', () => {
  let store = new Vuex.Store ({
    modules: {
      userModule: {
        namespaced: true,
        state: {
          userData: {
            displayName: '',
            about: '',
            banner: '',
            picture: '',
            karma: 0,
            cakeDate: '2019-08-24',
            socialLinks: [
              {
                type: 'Reddit',
                displayText: 'medo',
                link: '11',
              },
            ],
            nsfw: true,
            followed: true,
            blocked: true,
            moderatorOf: [
              {
                subredditName: '',
                numOfMembers: 0,
                nsfw: true,
              },
            ],
          },
          socialLinkItems: [
            {
              text: 'Custom URL',
              imgSrc: 'img',
              alt: 'custom url',
              type: 'link' /* link or username */,
              baseurl: '',
            },
          ],
        },
      },
    },
  });
  const message = {
    id: 2,
    text: 'hello asmaa',
    senderUsername: '/u/hoda_gamal',
    receiverUsername: '/u/asmaaadel0',
    subject: 'hi',
    sendAt: '2019-08-24T14:15:22Z',
    isReply: false,
    isRead: true,
  };

  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should renders if MessagesInbox content is correct', () => {
    const wrapper = shallowMount (MessagesInbox, {
      props: {
        message,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.exists ()).toBe (true);
  });

  //--------------------------------------------------------
  //                     Testing no message
  //--------------------------------------------------------
  it ('Testing no message value is true if there is no messages', () => {
    const data = {
      noMessages: true,
      loading: false,
      after: false,
    };
    const wrapper = shallowMount (MessagesInbox, {
      props: {
        data,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('No more messages...');
  });

  it ('Testing no message value is false if there is message', () => {
    const wrapper = shallowMount (MessagesInbox, {
      props: {
        message,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).not.contain ('seem to be anything here');
  });
});
