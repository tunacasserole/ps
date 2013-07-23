FactoryGirl.define do  factory :cost, :class => Ps::Cost do |o|
    o.display                           'display'
    o.sku_id                            'sku_id'
    o.cost_id                           'cost_id'
  end
end
