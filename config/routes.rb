Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'chat#index'
  namespace :api, defaults: { format: :json } do
    resources :messages, only: :index
  end
end
