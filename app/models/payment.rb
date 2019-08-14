class Payment < ApplicationRecord
  attr_accessor :card_number, :card_cvv, :card_expiration_month, :card_expiration_year
  belongs_to :user

  def self.month_options
    Date::MONTHNAMES.compact.each_with_index.map { |name, i| ["#{i + 1} - #{name}", i + 1] }
  end

  def self.year_options
    (Date.today.year..(Date.today.year + 10)).to_a
  end

  def process_payment
    customer = Stripe::Customer.create email: email, card: token
    Stripe::Charge.create customer: customer.id, amount: 5000000, description: "Basic", currency: "idr"
  end
end
