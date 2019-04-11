clone down...

do bundle install

go to gemfile.lock

get rid of the line that says bundled with whatever...

rake db:migrate

open up postgreSQL 10.5; the fancy blue elephant button…

Double click my name kevinkim

kevinkim=# CREATE role name_of_project_development WITH createdb
kevinkim-# \quit

// ♥ rake db:create
Created database 'name_of_project_development'
Created database 'name_of_project_test'

Rails master key stuff for 5.2

https://www.engineyard.com/blog/rails-encrypted-credentials-on-rails-5.2



do eb init -i

14 for ohio

14 for ohio

4 for create new application

Y,

production:
  adapter: postgresql
  pool: 5
  port: 5432
  reaping_frequency: 50
  sslmode: require
  checkout_timeout: 20
  database: ebdb
  username: <%= ENV['DB_USER']%>
  password: <%= ENV['POSTGRES_PW']%>
  host: <%= ENV['DB_HOST']%>
  min_messages: warning

DB_USER: set in eb
DB_HOST: the url of database
POSTGRES_PW set in eb

hello world ready keep this intact
