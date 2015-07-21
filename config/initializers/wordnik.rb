Wordnik.configure do |config|
  config.api_key = '14f8a92339c51023490200ca96d0152ff1a64f5f34621fab1'               # required
  # config.username = 'bozo'                    # optional, but needed for user-related functions
  # config.password = 'cl0wnt0wn'               # optional, but needed for user-related functions
  config.response_format = 'json'             # defaults to json, but xml is also supported
  config.logger = Logger.new('/dev/null')     # defaults to Rails.logger or Logger.new(STDOUT). Set to Logger.new('/dev/null') to disable logging.
end