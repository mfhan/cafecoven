class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:create]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      #instead of below,
      #render json: @user, status: :created, location: @user
      #we are going to show the user AND THE TOKEN
      token = encode(user_id: @user.id, email: @user.email)
      render json: { user: @user, token: token }, status: :ok

    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
p user_params
p 'hhhhhhhhhhhhhhhhhhhhhh', @user
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    # def user_params
    #   params.require(:user).permit(:email, :username, :password_digest)
    # end

    def user_params
    params.require(:user).permit(:email, :password, :lat, :long, :phone, :intro, :username)
  end
end
