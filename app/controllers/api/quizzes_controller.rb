class Api::QuizzesController < ApplicationController

  def create 
    @quiz = Quiz.new(quiz_params)
    if @quiz.save 
      render "api/quizzes/show"
    else 
      render json: @quiz.errors.full_messages, status: 422
    end
  end 


  def show 
    @quiz = Quiz.find(params[:id])

  end 

  def index 
    @quizzes = Quiz.all 
  end 

  def destroy 
  end 


  def update 
  end 

  private 

  def quiz_params 
    params.require(:quiz).permit(:name, :subject, :author_id, :grade, :public)
  end 

end
