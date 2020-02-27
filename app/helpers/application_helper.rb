module ApplicationHelper
  def webpack_asset_path(path)
    "http://localhost:3500/#{path}"

    # manifest = Rails.application.config.assets.webpack_manifest

    # if Rails.env.development? || !manifest
    #   return "http://localhost:3500/#{path}"
    # end

    # host = Rails.application.config.action_controller.asset_host
    # path = manifest[path] if manifest && manifest[path].present?

    # "#{host}/#{path}"
  end
end
