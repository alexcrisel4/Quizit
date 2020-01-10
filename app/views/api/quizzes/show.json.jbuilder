json.quiz do
  json.extract! @quiz, :id, :name, :author_id, :grade, :public, :subject
 
end

json.questions do
  @quiz.questions.each do |question|
    json.set! question.id do
      json.partial! 'api/questions/show', question: question
    end
  end
end