<?php
/**
 * @package rough
 */
?>
<article>
	<h1><?php the_title(); ?></h1>

	<?php the_content(); ?>

	<footer class="Meta">
		<?php if ( !is_category() ) : ?>
		<span class="Meta-chapters">Chapter: <?php the_category(', '); ?></span>
		<?php endif; ?>
		<?php if( has_tag() ) { ?>
			<span class="Meta-topics">Topics: <?php the_tags('', ' '); ?></span>
		<?php } ?>

		<?php edit_post_link( __('Edit')); ?>
	</footer>
</article>

<p class="TocLink"><a href="http://codesandnotes.com#toc">Back to table of contents</a></p>
