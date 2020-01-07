Rails.application.routes.draw do
  devise_for :users

root "messages#index"
resources :users, only: [:edit, :update]
root "groups#new"
end