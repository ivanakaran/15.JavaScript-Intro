let fromPrompt = prompt('Who is sending this message?');
let toPrompt = prompt('To whom are you sending this message?');
let subjectPrompt = prompt('What is the subject of this message?');
let messagePrompt = prompt('What is your message?')


let fromInput = document.getElementById('from');
let toInput = document.getElementById('to');
let subjectInput = document.getElementById('subject');
let messageInput = document.getElementById('message');

class Message {
  constructor(_from, _to, _subject, _message) {
    this.from = _from;
    this.to = _to;
    this.subject = _subject;
    this.message = _message;
  }
  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }

  getSubject() {
    return this.subject;
  }

  getMessage() {
    return this.message;
  }


}

let messageOne = new Message(fromPrompt, toPrompt, subjectPrompt, messagePrompt);

fromInput.value = messageOne.getFrom();
toInput.value = messageOne.getTo();
subjectInput.value = messageOne.getSubject();
messageInput.innerText = messageOne.getMessage();

