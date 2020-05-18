class CreatePlayerReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :player_reviews do |t|
      t.string :content
      t.integer :rating

      t.timestamps
    end
  end
end
