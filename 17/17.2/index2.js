//export
const callbackPrompt = {
  message: 'put your phone number',
  showPrompt() {
    const phone = prompt(this.message);
    console.log(phone);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
