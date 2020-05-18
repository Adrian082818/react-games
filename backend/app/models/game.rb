class Game < ApplicationRecord
    validates :title, :genre, :rating, presence: true 
end
