FactoryGirl.define do  factory :district, :class => Ps::District do |o|
    o.district_id                       'district_id'
    o.display                           'display'
    o.region_id                         'region_id'
  end
end
