FactoryGirl.define do  factory :purchase, :class => Ps::Purchase do |o|
    o.purchase_id                       'purchase_id'
    o.display                           'display'
  end
end
