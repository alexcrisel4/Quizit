class Question < ApplicationRecord
    validates :quiz_id, :body, presence: true

    belongs_to :quiz,
      primary_key: :id, 
      foreign_key: :quiz_id

end
