class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def show
    @quote = Quote.find(params[:id])
  end

  def new
    @quote = Quote.new
  end

  def create
    # @quote = Quote.new(body: params[:body])

    # respond_to do |format|
    # format.html { redirect_to quotes_path }
    
    # end
  end
end




