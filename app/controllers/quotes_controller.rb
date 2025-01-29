class QuotesController < ApplicationController

  def new
    @quote = Quote.new
  end

  def index
    @quotes = Quote.all
  end

  def create
    @quote = Quote.new(quotes_params)
    respond_to do |format|
      if @quote.save
        format.html { redirect_to quotes_path, notice: "Quote created successfully." }
        format.js   # This will look for a `create.js.erb` file
      else
        format.html { render :new }
        format.js   # This will look for a `create.js.erb` file
      end
    end
  end

  def show
    @quote = Quote.find(params[:id])
  end
    

  def update
    @quote = Quote.find(params[:id])
    if @quote.update(quotes_params)
      redirect_to @quote, notice: "User updated successfully."
    else
      render :edit
    end
  end

  private

  def quotes_params
    params.require(:quote).permit(:name)
  end
end



