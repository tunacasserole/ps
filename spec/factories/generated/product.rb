FactoryGirl.define do  factory :product, :class => Ps::Product do |o|
    o.product_id                        'product_id'
    o.display                           'display'
    o.category_id                       'category_id'
  end
end
