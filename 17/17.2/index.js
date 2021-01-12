//export
const callbackPrompt = {
  message: 'type your phone number',
  showPrompt() {
    const askedPhoneNumber = prompt(this.message);
    console.log(askedPhoneNumber);
  },
  showDeferredPromt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPromt(1000);
// console.log(callbackPrompt.showDeferredPromt(2000));
