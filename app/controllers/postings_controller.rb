class PostingsController < ApplicationController

  def index
    @postings = Posting.all
  end

  def show
    @posting = Posting.find(params[:id])
  end

  private

  def posting_params
    params.require(:posting).permit(:title, :description, :company)
  end

end
