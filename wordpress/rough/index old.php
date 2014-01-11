<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package rough
 */

get_header(); ?>

	<main id="Main" class="Main">

	<?php $recent = new WP_Query("page_id=1298"); ?>
	<?php while($recent->have_posts()) : $recent->the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
	<?php endwhile; ?>

	<?php wp_reset_postdata(); ?>

	<?php $recent2 = new WP_Query("post_id=1268"); ?>
	<?php while($recent2->have_posts()) : $recent2->the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
	<?php endwhile; ?>

	<?php /*if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<?php
			//  Include the Post-Format-specific template for the content.
			// * If you want to override this in a child theme, then include a file
			// * called content-___.php (where ___ is the Post Format name) and that will be used instead.

			get_template_part( 'content', get_post_format() );
			?>
		<?php endwhile; ?>

		<?php rough_paging_nav(); ?>

	<?php else : ?>

		<?php get_template_part( 'content', 'none' ); ?>

	<?php endif; */ ?>
	</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
