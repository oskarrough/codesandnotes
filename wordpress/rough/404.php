<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package rough
 */

get_header(); ?>

<main class="Main">
	<h1 class="Title"><?php _e( 'Oops! That page can&rsquo;t be found.', 'rough' ); ?></h1>

	<p><?php _e( 'Maybe try one of the links below or a search?', 'rough' ); ?></p>

	<?php get_search_form(); ?>

	<?php the_widget( 'WP_Widget_Recent_Posts' ); ?>

	<?php the_widget( 'WP_Widget_Tag_Cloud' ); ?>
</main>

<?php get_footer(); ?>
