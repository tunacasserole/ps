FactoryGirl.define do  factory :category, :class => Ps::Category do |o|
    o.category_id                       'category_id'
    o.display                           'display'
    o.category_code                     'category_code'
  end
end
