class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.integer :rating
      t.float :price

      t.timestamps
    end
  end
end
