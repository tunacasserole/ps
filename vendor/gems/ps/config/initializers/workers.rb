# Buildit::Framework.configure do  
#   config.initializers                     += [Ps::Gen::Initializer]
# end


# Buildit::Framework.register_scaffolders(:ps, :service, [

#   # register generators
#   Ps::Gen::Worker,
#   #Ps::Gen::CsvWorker,
#   #Ps::Gen::ExcelWorker,
#   Ps::Gen::HubWorker,
#   #Ps::Gen::SearchWorker

# ])

# Buildit::Framework.register_scaffolders(:ps, :convert, [

#     # register generators
#     Ps::Convert::Mark::Inventory,
#     Ps::Convert::Mark::Sku,
#     Ps::Convert::Mark::Order    
# ])

# Buildit::Framework.register_scaffolders(:ps, :stub, [

#     # register generators
#     Ps::Stub::Model,
# ])

# Buildit::Framework.register_scaffolders(:ps, :meta, [

#   # register meta importers
#   #Ps::Meta::Destroy,
#   Ps::Meta::Attribute,
#   Ps::Meta::Validation,
#   Ps::Meta::Association,
#   Ps::Meta::Polymorphic,
#   Ps::Meta::Explorer,
#   Ps::Meta::Column,
#   Ps::Meta::Form,
#   Ps::Meta::Fieldset,
#   Ps::Meta::Field,
#   Ps::Meta::Inspector,
#   Ps::Meta::Card,
#   #Ps::Meta::Hook,
#   Ps::Meta::Service,
#   Ps::Meta::Client
#   #Ps::Meta::Data
#   #Ps::Meta::Excel,
#   #Ps::Meta::Solr,
# ])