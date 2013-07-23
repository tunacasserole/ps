FactoryGirl.define do  factory :region, :class => Ps::Region do |o|
    o.region_id                         'region_id'
    o.display                           'display'
    o.company_id                        'company_id'
  end
end
