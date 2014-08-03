<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package rough
 */

get_header(); ?>

	<main class="Main">

	<?php if ( have_posts() ) : ?>

		<h1 class="Title">§
			<?php
				if ( is_category() ) :
					single_cat_title();

				elseif ( is_tag() ) :
					single_tag_title();

				elseif ( is_author() ) :
					printf( __( 'Author: %s', 'rough' ), '<span class="vcard">' . get_the_author() . '</span>' );

				elseif ( is_day() ) :
					printf( __( 'Day: %s', 'rough' ), '<span>' . get_the_date() . '</span>' );

				elseif ( is_month() ) :
					printf( __( 'Month: %s', 'rough' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'rough' ) ) . '</span>' );

				elseif ( is_year() ) :
					printf( __( 'Year: %s', 'rough' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'rough' ) ) . '</span>' );

				elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
					_e( 'Asides', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
					_e( 'Galleries', 'rough');

				elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
					_e( 'Images', 'rough');

				elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
					_e( 'Videos', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
					_e( 'Quotes', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
					_e( 'Links', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
					_e( 'Statuses', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
					_e( 'Audios', 'rough' );

				elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
					_e( 'Chats', 'rough' );

				else :
					_e( 'Archives', 'rough' );

				endif;
			?>
		</h1>

		<?php
			// Show an optional term description.
			$term_description = term_description();
			if ( ! empty( $term_description ) ) :
				printf( '<div class="taxonomy-description">%s</div>', $term_description );
			endif;
		?>

		<p>Here you'll find all full-length articles in this chapter.</p>

		<?php
			//Custom taxonomy is project_type, custom term is web-design
			$obj = get_queried_object();
			#print( $obj->term_id );
		?>

		<?php /* Start the Loop */ ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', get_post_format() ); ?>
		<?php endwhile; ?>

		<?php rough_paging_nav(); ?>

	<?php else : ?>

		<?php get_template_part( 'content', 'none' ); ?>

	<?php endif; ?>

</main>

<?php #get_sidebar(); ?>
<?php get_footer(); ?>
