json.quiz do
  json.extract! @quiz, :id, :name, :author_id, :grade, :public
 
end

# json.questions do
#   @quiz.questions.each do |question|
#     json.set! question.id do
#       json.partial! 'api/questions/question', question: question
#     end
#   end
# end