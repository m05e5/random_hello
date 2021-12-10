module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        num = Greeting.count
        random_salute = Greeting.offset(rand(num)).first
        render json: random_salute
        # render json: random_salute.salut
      end
    end
  end
end