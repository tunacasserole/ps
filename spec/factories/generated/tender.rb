FactoryGirl.define do  factory :tender, :class => Ps::Tender do |o|
    o.tender_id                         'tender_id'
    o.display                           'display'
    o.description                       'description'
    o.short_name                        'short_name'
  end
end
