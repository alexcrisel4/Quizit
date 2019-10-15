@quizzes.each do |quiz|
  json.set! quiz.id do
    json.extract! quiz, :id, :name,  :grade, :subject
  end
end