FactoryGirl.define do  factory :classification, :class => Ps::Classification do |o|
    o.classification_id                 'classification_id'
    o.display                           'display'
    o.department_id                     'department_id'
  end
end
