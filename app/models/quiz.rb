class Quiz < ApplicationRecord
  validates :author_id, :name, :public, presence: true
  
  
  belongs_to :user, 
    primary_key: :id, 
    foreign_key: :author_id
end
