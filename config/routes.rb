Rails.application.routes.draw do
  root 'pages#home'
  get '/motorola' => 'pages#motorola'
end
