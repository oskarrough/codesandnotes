<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package rough
 */

get_header(); ?>

<main class="Main">

	<?php if ( have_posts() ) : ?>

		<h1 class="Title"><?php printf( __( 'Search Results for: %s', 'rough' ), '<span>' . get_search_query() . '</span>' ); ?></h1>

		<p>Be sure to check the <a href="/">table of contents</a> as well.</p>

		<?php /* Start the Loop */ ?>
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'search' ); ?>

		<?php endwhile; ?>

		<?php rough_paging_nav(); ?>

	<?php else : ?>

		<?php get_template_part( 'content', 'none' ); ?>

	<?php endif; ?>
</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
