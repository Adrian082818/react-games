require 'test_helper'

class PlayerReviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player_review = player_reviews(:one)
  end

  test "should get index" do
    get player_reviews_url, as: :json
    assert_response :success
  end

  test "should create player_review" do
    assert_difference('PlayerReview.count') do
      post player_reviews_url, params: { player_review: { content: @player_review.content, rating: @player_review.rating } }, as: :json
    end

    assert_response 201
  end

  test "should show player_review" do
    get player_review_url(@player_review), as: :json
    assert_response :success
  end

  test "should update player_review" do
    patch player_review_url(@player_review), params: { player_review: { content: @player_review.content, rating: @player_review.rating } }, as: :json
    assert_response 200
  end

  test "should destroy player_review" do
    assert_difference('PlayerReview.count', -1) do
      delete player_review_url(@player_review), as: :json
    end

    assert_response 204
  end
end
