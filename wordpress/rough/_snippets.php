	<?php
// get all the categories from the database
$cats = get_categories();

// loop through the categries
foreach ($cats as $cat) {

	// setup the category ID
	$cat_id= $cat->term_id;

	// create a custom wordpress query
	query_posts("cat=$cat_id&post_per_page=5");

	// start the wordpress loop!
	if (have_posts()) :

		// Make a header for the category
		echo '<h2>'.$cat->name.'</h2>';

		while (have_posts()) :
			the_post();
?>

			<?php // create our link now that the post is setup ?>
			<div class="listing">
				<a href="<?php the_permalink();?>"><?php the_title(); ?></a><?php #the_content(); ?>
			</div>

		<?php endwhile; ?>
	<?php endif; // done our wordpress loop. Will start again for each category ?>
<?php } // done the foreach statement ?>

<?php
// get all the categories from the database
$tags = get_tags();
// loop through the categries
foreach ($tags as $tag) {
echo($tag->name);
// setup the cateogory ID
$tag_id = $tag->term_id;

echo($tag_id);

// create a custom wordpress query
query_posts("tag_id=$tag_id&post_per_page=300");

// start the wordpress loop!
if (have_posts()) :

echo('posts');
// Make a header for the category
echo '<h2 class="cat-title">'.$tag->name.'</h2>';

while (have_posts()) :
#the_post(); ?>

<?php // create our link now that the post is setup ?>
<div class="listing">
<a href="<?php the_permalink();?>"><?php the_title(); ?></a>
<?php #the_content(); ?>
</div>

<?php endwhile; endif; // done our wordpress loop. Will start again for each category ?>
<?php } // done the foreach statement ?>
