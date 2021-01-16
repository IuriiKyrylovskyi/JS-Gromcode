export const callbackPrompt = {
  message: 'your phone here',
  showPrompt() {
    return `${this.message}`;
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt, ms);
    // setTimeout(this.showPrompt.bind(this), ms);
  },
};
