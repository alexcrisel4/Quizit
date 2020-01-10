class Api::QuestionsController < ApplicationController

  def create 
    @question = Question.new(question_params)
   
    if @question.save 
      render :show
    else 
      render json: @question.errors.full_messages, status: 422
    end
  end


  def index 
      @questions = Question.find_by(params[:quiz_id])
  end 

  def show 
    @question = Question.find_by(params[:id])

    if @question 
      render :show 
    else 
      render json: @question.errors.full_messages, status: 404
    end
  end



  private 

  def question_params 
    params.require(:question).permit(:body, :quiz_id)
  end 
end
