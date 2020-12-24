# Set this to the root of your project when deployed

#http_path = ENV['COMPASS_HTTP_PATH']

# Path to project, starting from css/build
#project_path = ENV['COMPASS_PROJECT_PATH'].nil? ? "dev" : ENV['COMPASS_PROJECT_PATH'].gsub("\\","\/")
#project_path = "../../"

# Subdirs, starting from projmect_path
css_dir = "dev/css"
sass_dir = "dev/sass"
images_dir = "prod/img"
javascripts_dir = "js"

# Generated images dir, starting from project_path
# generated_images_dir = "generated_images"

# Generated images path on the web server
# http_generated_images_path = (environment == :production) ? http_path + "img" : "/Content/Styles/generated_images"

# Output style and line comments
output_style = (environment == :production) ? :compressed : :expanded
line_comments = (environment == :production) ? false : true

sourcemap = (environment == :production) ? false : true

# Add a function to read compass option
module Sass::Script::Functions
	def get_compass_option(name)
		Sass::Script::String.new(Compass.configuration.instance_eval(name.to_s))
	end
end