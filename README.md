# NG Photonation

A photo community website by NG Photo Studios

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### You need to have a SendGrid account, Stripe account, and AWS account, with an S3 bucket set up.

Run these commands
```
sudo apt update
sudo apt install imagemagick
```

Install these gems

```
gem install rails
gem install bcrypt
```

### Installing

Run bundle install

```
bundle install --without production
```

Setup database

```
rails db:migrate
```

Then start the server

```
rails server
```

## Running the tests

```
rails test
```

## Deployment

This was built to be run on Heroku.

```
heroku login
```

Follow the instructions to login, and then

```
heroku create
```

And then

```
git push heroku master
```

Migrate the database, run

```
heroku run rails db:migrate
```

Setup SendGrid addon
```
heroku addons:create sendgrid:starter
```

Setup environment variables
```
heroku config:set SENDGRID_USERNAME=apikey
heroku config:set SENDGRID_PASSWORD=YOURPASSWORD
heroku config:set STRIPE_TEST_PUBLISHABLE_KEY=YOURPUBLISHABLEKEY
heroku config:set STRIPE_TEST_SECRET_KEY=YOURSECRETKEY
heroku config:set S3_ACCESS_KEY=YOURACCESSKEY
heroku config:set S3_SECRET_KEY=YOURSECRETKEY
heroku config:set S3_BUCKET=YOURBUCKETNAME
```

## Built With

- [Ruby on Rails](https://rubyonrails.org/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - CSS framework

## License

This project is licensed under the MIT License
