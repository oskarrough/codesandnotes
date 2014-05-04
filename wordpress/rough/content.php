<?php
/**
 * @package rough
 */
?>
		<article <?php #post_class(); ?>>
			<h1 class="Title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'rough' ) ); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', 'rough' ),
					'after'  => '</div>',
				) );
			?>

			<footer class="Meta">
				<span class="Chapters"><span class="screen-reader-text">Chapters: </span><?php the_category(', '); ?>. </span>

				<?php if( has_tag() ) { ?>
					<span class="Topics"><span class="screen-reader-text">Topics: </span><?php the_tags('', ' '); ?></span>
				<?php } ?>

				<?php edit_post_link( __('Edit')); ?>
			</footer>
		</article>
