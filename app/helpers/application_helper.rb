module ApplicationHelper
  def webpack_asset_path(path)
    return "http://localhost:3500/#{path}" if Rails.env.development?

    host = Rails.application.config.action_controller.asset_host
    manifest = JSON.parse(File.read(Rails.root.join('public', 'assets', 'manifest.json')))
    path = manifest[path]
    "#{host}/#{path}"
  end
end
