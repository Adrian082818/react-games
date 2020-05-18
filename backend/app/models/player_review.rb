class PlayerReview < ApplicationRecord
    validates :rating, :content, presence: true 
end
