<?php
/**
 * rough functions and definitions
 *
 * @package rough
 */


if ( ! function_exists( 'rough_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function rough_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on rough, use a find and replace
	 * to change 'rough' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'rough', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	#add_theme_support( 'automatic-feed-links' );

	// Remove that junk from my wp_head
	 remove_action('wp_head', 'rsd_link'); // Removes the Really Simple Discovery link
	 remove_action('wp_head', 'wlwmanifest_link'); // Removes the Windows Live Writer link
	 remove_action('wp_head', 'wp_generator'); // Removes the WordPress version
	 // remove_action('wp_head', 'feed_links', 2); // Removes the RSS feeds remember to add post feed maunally (if required) to header.php
	 remove_action('wp_head', 'feed_links_extra', 3); // Removes all other RSS links
	 // remove_action('wp_head', 'index_rel_link'); // Removes the index page link
	 // remove_action('wp_head', 'start_post_rel_link', 10, 0); // Removes the random post link
	 // remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Removes the parent post link
	 //remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Removes the next and previous post links
	 remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
	 remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 ); // Removes shortlink


	// Add support for to posts for 'Simple page order plugin'
	add_post_type_support( 'post', 'page-attributes' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'rough' ),
	) );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );
}
endif; // rough_setup
add_action( 'after_setup_theme', 'rough_setup' );


// function rough_add_editor_styles() {
//     add_editor_style('styles/editor-style.css');
// }
// add_action( 'init', 'rough_add_editor_styles' );

/**
 * Register widgetized area and update sidebar with default widgets.
 */
function rough_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'rough' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<div class="Widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2>',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'rough_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function rough_scripts() {
	#wp_enqueue_style( 'rough-style', get_stylesheet_uri() );
	#wp_enqueue_script( 'rough-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );
	#wp_enqueue_script( 'rough-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

}
// add_action( 'wp_enqueue_scripts', 'rough_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


function rough_modify_query_order( $query ) {
    if ( $query->is_archive() && $query->is_main_query() ) {
        $query->set( 'orderby', 'menu_order' );
        $query->set( 'order', 'ASC' );
    }
}
add_action( 'pre_get_posts', 'rough_modify_query_order' );


// Disable W3TC footer comment for all users
add_filter( 'w3tc_can_print_comment', function( $w3tc_setting ) { return false; }, 10, 1 );




// Remove yarpp related plugin CSS
add_action('wp_print_styles','rough_dequeue_header_styles');
function rough_dequeue_header_styles() {
  wp_dequeue_style('yarppWidgetCss');
}

add_action('get_footer','rough_dequeue_footer_styles');
function rough_dequeue_footer_styles() {
  wp_dequeue_style('yarppRelatedCss');
}
