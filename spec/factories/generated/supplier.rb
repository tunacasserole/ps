FactoryGirl.define do  factory :supplier, :class => Ps::Supplier do |o|
    o.supplier_id                       'supplier_id'
    o.supplier_name                     'supplier_name'
  end
end
