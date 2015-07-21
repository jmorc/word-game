class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def user_params
    params.require(:user).permit(:name, :score)
  end
end