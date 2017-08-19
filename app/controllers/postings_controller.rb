class PostingsController < ApplicationController

  def index
    @postings = Posting.all
  end

  def home
  end

  def show
    @posting = Posting.find(params[:id])
  end

  def new
  end

  def create
    @posting = Posting.new(posting_params)
    if @posting.save
      redirect_to root_path, :flash => { :success => 'Your job was posted!' }
    else
      render 'new'
    end
  end

  private

  def posting_params
    params.require(:posting).permit(:title, :description, :company)
  end

end
