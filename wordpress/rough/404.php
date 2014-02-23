<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package rough
 */

get_header(); ?>

<main class="Main">
	<h1 class="Title"><?php _e( 'Imagine if books had 404 pages?', 'rough' ); ?></h1>

	<p>Go back to the <a href="http://codesandnotes.com">table of contents of Codes &amp; Notes</a> or try a search.</p>

	<?php get_search_form(); ?>

</main>

<?php get_footer(); ?>
