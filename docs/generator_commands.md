This project uses the following bootstrap & devise generator commands
```
rails g devise:install
rails g bootstrap:install static
rails g bootstrap:layout application # and then confirm Y to replace
rails g devise:views:locale en
rails g devise:views:bootstrap_templates
rails g bootstrap:themed Images
rails g uploader Image
```