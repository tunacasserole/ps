Buildit::Framework.configure do
  # register this gem with the framework
  config.gems.ps            = {name: "ps", path: Ps::Engine.root.to_s, allow_unpacking: true}
  
  config.service_paths          += [File.join(Ps::Engine.root, "app/services", "**")]
  config.email_template_paths   += [File.join(Ps::Engine.root, "app/emails", "**")]
  config.event_template_paths   += [File.join(Ps::Engine.root, "app/events", "**")]

  #config.model_paths            += [File.join(Ps::Engine.root, "app/models", "**")]
end # Buildit::Framework.configure

Ps::Engine.configure do
  config.i18n.load_path += Dir[Ps::Engine.root.join('config', 'locales', '**/*.{rb,yml}').to_s]  
end