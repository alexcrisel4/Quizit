class Api::QuizzesController < ApplicationController

  def create 
    @quiz = Quiz.new(quiz_params)
    debugger;
    if @quiz.save 
      render :show
    else 
      render json: @quiz.errors.full_messages, status: 422
    end
  end 


  def show 
    @quiz = Quiz.find(params[:id])
    
    if @quiz 
      render :show 
    else 
    render json: @quiz.errors.full_messages, status: 404
    end
  end 

  def index 
    if params[:subject] 
      @quizzes = Quiz.find_by(params[:subject]) 
    else 
      @quizzes = Quiz.all 
    end
  end 

  def destroy 
    @quiz = Quiz.find_by(params[:id])
    if @quiz
      @quiz.destroy 
      render :show
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
