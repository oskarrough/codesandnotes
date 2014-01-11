<?php
/**
 * @package rough
 */
?>
		<article <?php #post_class(); ?>>
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>

			<footer class="Meta">
				<?php if ( !is_category() ) : ?>
				<span class="Chapters">Chapter: <?php the_category(', '); ?></span>
				<?php endif; ?>
				<?php if( has_tag() ) { ?>
					<span class="Topics">Topics: <?php the_tags('', ' '); ?></span>
				<?php } ?>

				<?php edit_post_link( __('Edit')); ?>
			</footer>
		</article>
