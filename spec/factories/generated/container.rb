FactoryGirl.define do  factory :container, :class => Ps::Container do |o|
    o.container_id                      'container_id'
    o.display                           'display'
    o.container_nbr                     'container_nbr'
  end
end
