source 'http://rubygems.org'
source 'http://tunacasserole:horizon@gems.buildit.io' 
ruby '2.0.0'

gem 'rails', '3.2.11'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'
# 

gem 'mysql2'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'

end

gem 'resque'
gem 'progress_bar'      # track sunspot:reindex

gem 'jquery-rails'
gem 'state_machine'

#group :development do
  gem "thin"
#end

group :development do
  gem "sunspot_solr"
  gem "prawn"
end

gem "roo" , "1.10.1"
gem "buildit"
gem "buildit_comm"#,         :path => "vendor/gems/buildit_comm"
gem 'buildit_sockets'

gem "ps", :path => "vendor/gems/ps"
