const app = new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
    title: 'Chat Drakosha',
    name: '',
    text: '',
    messages: [],
    socket: null,
  },
  methods: {
    sendMessage() {
      console.log('3');
      if (this.validateInput()) {
        const message = {
          name: this.name,
          text: this.text,
        };
        console.log(message);
        this.socket.emit('msgToServer', message);
        this.text = '';
      }
    },
    receivedMessage(message) {
      console.log('888');
      this.messages.push(message);
    },
    validateInput() {
      return this.name.length > 0 && this.text.length > 0;
    },
  },
  created() {
    this.socket = io('/chat');
    console.log(location.href);
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    console.log('2');
    this.socket.on('msgToClient', (message) => {
      console.log('555');
      toastr.success('Новое сообщение');
      this.receivedMessage(message);
    });
  },
});
