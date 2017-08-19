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
      flash[:success] = 'You successfully added a new job posting.'
      redirect_to root_path
    else
      render :new
    end
  end

  def update
  @posting = Posting.find(params[:id])
  if @posting.update_attributes(event_params)
    flash[:success] = 'You updated your job posting.'
    redirect_to root_path
  else
    render :edit
  end
end

  private

  def posting_params
    params.require(:posting).permit(:title, :description, :company)
  end

end
