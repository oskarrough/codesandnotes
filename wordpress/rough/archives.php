<?php
/*
Template Name: Archives
*/
get_header(); ?>

<main id="Main" class="Main">

	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part( 'content', 'page' ); ?>
	<?php endwhile; // end of the loop. ?>

	<?php #get_search_form(); ?>

	<!-- <section class="Chapter">
		<h2>Chapters</h2>
		<?php wp_nav_menu( array( 'menu' => 'chapters', 'menu_class' => 'Nav' ) ); ?>
	</section> -->
	<section class="Chapter">
		<h1 class="Chapter-title"><a href="/chapters/preface">Preface</a></h1>
		<ul>
		<?php $query = new WP_Query('category_name=preface&posts_per_page=-1'); ?>
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>
	<section class="Chapter">
		<h1 class="Chapter-title"><a href="/chapters/aspects">Aspects</a></h1>
		<ul>
		<?php $query = new WP_Query('category_name=aspects&posts_per_page=-1'); ?>
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>
	<section class="Chapter">
		<h1 class="Chapter-title"><a href="/chapters/front-end">Front-end</a></h1>
		<ul>
		<?php $query = new WP_Query('category_name=front-end&posts_per_page=-1'); ?>
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>
	<section class="Chapter">
		<h1 class="Chapter-title"><a href="/chapters/articles">Articles</a> <small>(these will be turned into differen1 chapters later)</small></h2>
		<ul>
		<?php $query = new WP_Query('category_name=articles&posts_per_page=-1'); ?>
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>
	<section class="Topics">
		<h2 class="Topics-title">Topics</h2>
		<?php wp_tag_cloud(
		"&number=30".
		"&orderby=count".
		"&order=DESC".
		"&format=list".
		"&taxonomy=post_tag"); ?>
	</section>

</main>

<?php get_footer(); ?>
