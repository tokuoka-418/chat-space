Rails.application.routes.draw do
  devise_for :users
   # ログアウト
   devise_scope :social_account do
    get 'sign_out', to: "sessions#destroy"
  end

root "messages#index"
resources :users, only: [:edit, :update]
end