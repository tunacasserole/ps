FactoryGirl.define do  factory :email_address, :class => Ps::EmailAddress do |o|
    o.email_address_id                  'email_address_id'
    o.display                           'display'
    o.emailable_id                      'emailable_id'
    o.emailable_type                    'emailable_type'
    o.email_address                     'email_address'
    o.email_address_type                'email_address_type'
  end
end
