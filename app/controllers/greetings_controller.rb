class GreetingsController < ApplicationController
  def index
    @messages = Greeting.all
    random_number = rand(0..@messages.length - 1)
    render json: @messages[random_number]
  end
end
