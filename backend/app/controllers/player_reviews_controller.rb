class PlayerReviewsController < ApplicationController
  before_action :set_player_review, only: [:show, :update, :destroy]

  # GET /player_reviews
  def index
    @player_reviews = PlayerReview.all

    render json: @player_reviews
  end

  # GET /player_reviews/1
  def show
    render json: @player_review
  end

  # POST /player_reviews
  def create
    @player_review = PlayerReview.new(player_review_params)

    if @player_review.save
      render json: @player_review, status: :created, location: @player_review
    else
      render json: @player_review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /player_reviews/1
  def update
    if @player_review.update(player_review_params)
      render json: @player_review
    else
      render json: @player_review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /player_reviews/1
  def destroy
    @player_review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_review
      @player_review = PlayerReview.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def player_review_params
      params.require(:player_review).permit(:content, :rating)
    end
end
