class PostingsController < ApplicationController

  def index
    @postings = Posting.all
  end

  def show
    @posting = Posting.find_by(params[:id])
  end

  private

  def posting_params
    params.require(:posting).permit(:title, :description, :company)
  end

end
