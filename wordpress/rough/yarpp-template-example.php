<?php
/*
YARPP Template: Simple
Author: mitcho (Michael Yoshitaka Erlewine)
Description: A simple example YARPP template.
*/
?>

<?php if (have_posts()):?>
<h2>Continue reading:</h2>
<ul class="Toc">
	<?php while (have_posts()) : the_post(); ?>
	<li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
	<?php endwhile; ?>
</ul>
<?php endif; ?>
<!-- <p><a href="http://codesandnotes.com" title="See all articles on Codes &amp; Notes">↑ Table of contents</a></p> -->
