Rails.application.routes.draw do
  root to: 'site#root'

  namespace :api, defaults: { format: :json } do
       resources :words, only: [ :show, :index, :new ]
       resources :users, only: [ :show, :index, :new, :create ]
  end
end
