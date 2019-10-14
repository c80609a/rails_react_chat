class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat'
  end

  def send_message(payload)
    message = Message.new(user: current_user, text: payload["message"])
    if message.save
      ActionCable.server.broadcast "chat", message: payload["message"]
    end
  end

  def unsubscribed

  end
end
