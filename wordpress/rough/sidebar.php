<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package rough
 */
?>
	<aside class="Aside">
		<!-- <p><a class="link-toc" href="/">↑ Table of contents</a></p> -->

		<?php do_action( 'before_sidebar' ); ?>
		<?php if ( ! dynamic_sidebar( 'sidebar-1' ) ) : ?>
		<?php endif; // end sidebar widget area ?>

		<?php get_search_form(); ?>
	</aside>
