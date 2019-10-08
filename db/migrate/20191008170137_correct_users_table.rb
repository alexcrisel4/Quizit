class CorrectUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :title, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    remove_column :users, :username, :string
  end
end
