import cable from "actioncable"

let consumer,
    callback

export function createChannel(...args) {
  if (!consumer) {
    consumer = cable.createConsumer();
  }

  return consumer.subscriptions.create(...args);
}

export const chat = createChannel("ChatChannel", {
  received({ message }) {
    if (callback) callback.call(null, message);
  }
});

export function sendMessage(message) {
  chat.perform("send_message", { message });
}

export function setCallback(fn) {
  callback = fn;
}


