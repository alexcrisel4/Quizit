class User < ApplicationRecord
  attr_reader :password

  validates :session_token, :password_digest, :email, :user_type, :first_name, :last_name, presence: true 
  validates :email, uniqueness: true 
  validates :password, length: { minimum: 6 }, allow_nil: true 

  after_initialize :ensure_session_token 

  has_many :quizzes, 
    primary_key: :id, 
    foreign_key: :author_id

def self.find_by_credentials(email, password) 
  user = User.find_by(email: email)
  return nil unless user && user.valid_password?(password)
  user
end

def ensure_session_token
  self.session_token ||= SecureRandom.urlsafe_base64
end

def reset_session_token 
  self.session_token = SecureRandom.urlsafe_base64
  self.save
  self.session_token
end

def valid_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def password=(password)
  @password = password 
  self.password_digest = BCrypt::Password.create(password)
end



end
