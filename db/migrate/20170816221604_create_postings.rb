class CreatePostings < ActiveRecord::Migration[5.1]
  def change
    create_table :postings do |t|
      t.string :title
      t.text :description
      t.string :company

      t.timestamps
    end
  end
end
