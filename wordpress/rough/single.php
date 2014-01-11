<?php
/**
 * The Template for displaying all single posts.
 *
 * @package rough
 */

get_header(); ?>

	<main id="Main" class="Main">
	<?php while ( have_posts() ) : the_post(); ?>

		<?php get_template_part( 'content', 'single' ); ?>

		<?php #rough_post_nav(); ?>

		<?php related_posts(); ?>

		<?php
			// If comments are open or we have at least one comment, load up the comment template
			if ( comments_open() || '0' != get_comments_number() ) :
				comments_template();
			endif;
		?>

	<?php endwhile; // end of the loop. ?>
	</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
