class Posting < ApplicationRecord

  validates_presence_of :title, :description, :company

end
