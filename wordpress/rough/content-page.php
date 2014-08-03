<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package rough
 */
?>

<article>
	<h1><?php the_title(); ?></h1>

	<?php the_content(); ?>

	<?php edit_post_link( __('Edit')); ?>
</article>

<p class="TocLink"><a href="http://codesandnotes.com#toc">Back to table of contents</a></p>
