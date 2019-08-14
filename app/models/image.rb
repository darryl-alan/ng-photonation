class Image < ApplicationRecord
  belongs_to :user
  mount_uploader :image, ImageUploader

  validate :image_size

  private
  def image_size
    maximum_size = 7
    if image.size > maximum_size.megabytes
      errors.add(:picture, "maximum size is #{maximum_size} MB")
    end
  end
end
