
require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require 'rest-client'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get '/api/yahoo-finance/:symbol' do
  content_type :json

  # Lógica para obter dados do Yahoo Finance aqui
  yahoo_finance_url = "https://query2.finance.yahoo.com/v8/finance/chart/#{params[:symbol]}"
  response = RestClient.get(yahoo_finance_url)

  # Resposta da API
  if response.code == 200
    return response.body
  else
    return { error: "Erro ao obter dados do Yahoo Finance" }.to_json
  end
end
