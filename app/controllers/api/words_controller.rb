class Api::WordsController < ApplicationController
  def new
    words = Wordnik.words.get_random_words(max_length: 5, min_length: 3)
    words.each do |word|
      Word.create(word: word['word'])
    end

    ids = Word.order('id DESC').limit(10).pluck(:id)
    @words = Word.where(id: ids)
    render json: @words
  end
end
