<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package rough
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<h1 class="Title"><?php the_title(); ?></h1>

	<?php the_content(); ?>
	<?php
		wp_link_pages( array(
			'before' => '<div class="page-links">' . __( 'Pages:', 'rough' ),
			'after'  => '</div>',
		) );
	?>

	<?php edit_post_link( __( 'Edit', 'rough' ), '<footer class="entry-meta"><span class="edit-link">', '</span></footer>' ); ?>
</article>
