FactoryGirl.define do  factory :product_type, :class => Ps::ProductType do |o|
    o.product_type_id                   'product_type_id'
    o.display                           'display'
  end
end
