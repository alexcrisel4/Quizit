class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.integer :author_id, null: false
      t.string :name, null: false 
      t.string :subject
      t.string :grade
      t.boolean :public, null: false 
      t.timestamps
    end
  end
end
