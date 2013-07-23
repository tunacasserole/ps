FactoryGirl.define do  factory :department, :class => Ps::Department do |o|
    o.department_id                     'department_id'
    o.display                           'display'
    o.company_id                        'company_id'
  end
end
