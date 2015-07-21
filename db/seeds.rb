# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Word.create( word: 'bottle')
Word.create( word: 'milk')
Word.create( word: 'donut')
Word.create( word: 'plate')

User.create( name: 'Sue-Ann', score: 30 )
User.create( name: 'Thomas', score: 20 )
User.create( name: 'Adelaide', score: 40 )
