class Api::QuizzesController < ApplicationController

  def create 
    @quiz = Quiz.new(quiz_params)
    if @quiz.save 
      render :show
    else 
      render json: @quiz.errors.full_messages, status: 422
    end
  end 


  def show 
    @quiz = Quiz.find_by(params[:id])
    if @quiz 
      render :show 
    else 
    render json: @quiz.errors.full_messages, status: 404
    end
  end 

  def index 
    @quizzes = Quiz.all 
  end 

  def destroy 
    @quiz = Quiz.find_by(params[:id])
    if @quiz
      @quiz.delete 
      render :index
    end

  end 


  def update 
    @quiz = Quiz.find_by(params[:id])

  end 

  private 

  def quiz_params 
    params.require(:quiz).permit(:name, :subject, :author_id, :grade, :public)
  end 

end
