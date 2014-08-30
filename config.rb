require 'middleman-navtree'

# Set paths
set :source, 'content'
set :build_dir, 'dist'

# Configuration For Themes
set :layouts_dir, '../design/layouts'
set :css_dir, '.'
set :js_dir, 'scripts'
set :images_dir, 'images'

#set :ignore, 'app/*'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Disable layout on the sitemap page.
page "/sitemap.xml", :layout => false

#page "/index.html", :layout => "article"

# Relative links and assets are important for publishing on Github.
set :relative_links, true
activate :relative_assets

# We leave :directory_indexes inactive, so internal markdown links between pages will not break.
#activate :directory_indexes

# Markdown Settings. The specified options render Github Flavored markdown.
set :markdown_engine, :redcarpet
activate :syntax
set :markdown, :fenced_code_blocks => true
set :markdown, :smartypants => true
set :markdown, :no_intra_emphasis => true
set :markdown, :autolink => true
set :markdown, :strikethrough => true
set :markdown, :tables => true
set :markdown, with_toc_data: true

# Automatic image dimensions on image_tag helper
#activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
   activate :livereload
end

# Start navtree for our navigation/table of contents
activate :navtree do |options|
  #options.data_file = 'tree.yml' # The data file where our navtree is stored.
  options.source_dir = 'content' # The `source` directory we want to represent in our nav tree.
  options.ignore_files = ['README.md', 'robots.txt', 'humans.txt', '404.md'] # An array of files we want to ignore when building our tree.
  #options.ignore_dir = ['themes']  # An array of directories we want to ignore when building our tree.
  options.promote_files = ['index.md'] # Any files we might want to promote to the front of our navigation
  options.home_title = 'Codes & Notes' # The default link title of the home page (located at "/"), if otherwise not detected.
  #options.ext_whitelist = ['.md', '.markdown', '.mkd']
end

helpers do

  # Helper for getting the page title
  # Based on this: http://forum.middlemanapp.com/t/using-heading-from-page-as-title/44/3
  # 1) Use the title from frontmatter metadata, or
  # 2) peek into the page to find the H1, or
  # 3) IF this is the title page, use the Book title, or
  # 4) fallback to a filename-based-title
  def discover_page_title(page = current_page)
    if page.data.title
      return page.data.title # Frontmatter title
    elsif page.url == '/'
      return data.book.title
    elsif match = page.render({:layout => false, :no_images => true}).match(/<h.+>(.*?)<\/h1>/)
      return match[1] + ' | ' + data.book.title
    else
      filename = page.url.split(/\//).last.gsub('%20', ' ').titleize
      return filename.chomp(File.extname(filename)) + ' | ' + data.book.title
    end
  end

  # Generates a TOC based on headlines
  def table_of_contents(resource)
    content = File.read(resource.source_file)
    toc_renderer = Redcarpet::Render::HTML_TOC.new
    markdown = Redcarpet::Markdown.new(toc_renderer, nesting_level: 3) # nesting_level is optional
    markdown.render(content)
  end

  # A helper that wraps link_to, and only creates the link if it exists in
  # the sitemap. Used for page titles.
  def link_to_if_exists(*args, &block)
    url = args[0]

    resource = sitemap.find_resource_by_path(url)
    if resource.nil?
      block.call
    else
      link_to(*args, &block)
    end
  end

end

# Build-specific configuration
configure :build do

  # Remove unnecessary CSS vendor prefixes, and add any that are missing.
  activate :autoprefixer do |config|
    config.browsers = [ "last 2 versions", "> 2%", "Firefox ESR" ]
    config.cascade = true # Make the output CSS pretty
  end

  # Make things small as part of the build
  #activate :minify_css
  #activate :minify_html
  #activate :gzip # Requires webserver configuration to take advantage of this
end

# This plugin activation needs to be last!
activate :alias
