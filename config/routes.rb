Rails.application.routes.draw do
  resources :postings
  root 'postings#home'
end
