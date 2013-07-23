
Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'a',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820CDEMOAARON',
  first_name: 'Aaron',
  last_name: 'Henderson',
  email_address: 'aaron@buildit.io',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::User.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  first_name: 'Parker',
  last_name: 'Demo',
  email_address: 'demo',
  sso_plugin_code: 'BUILDIT',
  api_token: 'L0qxHS_RoW'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820C9D0PARKER',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820C9D04AARON',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

Buildit::UserRole.create(
  user_id: '811166D4D50A11E2B45820CDEMOAARON',
  role_id: '323244F0204011EFCFE9040CCEDF842E'
)

user = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D0PARKER').first
user.password = 'demo'
user.save

user = Buildit::User.where(:user_id => '811166D4D50A11E2B45820C9D04AARON').first
user.password = 'a'
user.save

user = Buildit::User.where(:user_id => '811166D4D50A11E2B45820CDEMOAARON').first
user.password = 'welcome'
user.save

# APPLICATIONS =====================================================================
Buildit::Application.create(
  application_id:       '6900AE7AC18B11E289BA20C9D047DD15',
  application_code:     'PS',
  hub_xtype:            'ps-app-Hub',
  application_name:     'PeopleSoft CRM System',
  description:          "The complete CRM solution for PeopleSoft customers.",
  is_enabled:           1
  )
Buildit::ApplicationRole.create(
  application_role_id:  '62BF1790C19511E289BA20C9D0476666',
  application_id:       '6900AE7AC18B11E289BA20C9D047DD15',
  role_id:              '323244F0204011EFCFE9040CCEDF842E',
  is_enabled:           1
  )