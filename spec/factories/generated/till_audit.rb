FactoryGirl.define do  factory :till_audit, :class => Ps::TillAudit do |o|
    o.till_audit_id                     'till_audit_id'
    o.display                           'display'
  end
end
