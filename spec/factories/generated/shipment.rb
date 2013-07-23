FactoryGirl.define do  factory :shipment, :class => Ps::Shipment do |o|
    o.shipment_id                       'shipment_id'
    o.location_id                       'location_id'
    o.create_date                       
  end
end
