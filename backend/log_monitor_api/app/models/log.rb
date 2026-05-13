class Logs < ApplicationRecord

  validates :message, presence: true
  validates :level, presence: true, inclusion: { in: %w[error warning info] }
  validates :source, presence: true
  validates :timestamp, presence: true

  def initialize
    
  end
end
