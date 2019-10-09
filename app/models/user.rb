class User < ApplicationRecord

  has_secure_password

  #validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 5 }, on: :create

  attribute :prevlat, :float
  attribute :prevlong, :float 

  #with default vals:
  # attribute :prevlat, :float, default: 40.753345
  # attribute :prevlong, :float, default: -73.9841719

end
