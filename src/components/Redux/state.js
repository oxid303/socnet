let rerender = () => {};

let state = {
  subscribe(observer) {rerender = observer},

  profile: {
    posts: [
      { id: 1, message: 'Hi :)', likesCount: 15 },
      { id: 2, message: 'How are you?', likesCount: 23 }
    ],
    textArea: '',

    typing(message) {
      this.textArea = message;
      rerender();
    },

    addPost() {
      if (this.textArea === '') return;
    
      let newPost = {
        id: this.posts.length + 1,
        message: this.textArea,
        likesCount: 0
      };
      this.posts.push(newPost);
      this.textArea = '';
      rerender();
    }
  },
  dialogs: {
    users: [
      { id: 1, name: 'Ann' },
      { id: 2, name: 'Denis' },
      { id: 3, name: 'Kris' },
      { id: 4, name: 'Pasha' },
      { id: 5, name: 'Lars' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Test message' },
      { id: 4, message: 'What\'s new?' },
      { id: 5, message: 'Everything ok :)' }
    ]
  }
};

export default state;
