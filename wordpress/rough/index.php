<?php get_header(); ?>

<header class="Manchet">
	<h1>Codes &amp; Notes</h1>
	<h2>A guide to web development that you can trust</h2>
	<h3>by <span class="Author">Oskar Rough Mosumgaard</span></h3>
	<p>A book for anyone wanting to learn more about web development.<br>Whether you are just getting started or need a trustworthy reference, this is it.</p>
	<hr class="Ornament" id="toc">
</header>

<main class="Main Container">

	<?php /*
	<!-- <h3>Chapters</h3>
	<ul>
		<li><a href="#Preface">Preface</a></li>
		<li><a href="#Aspects">Aspects</a></li>
		<li><a href="#Front-end">Front-end</a></li>
		<li><a href="#Tools-Workflow">Tools &amp; Workflow</a></li>
		<li><a href="#Articles">Articles</a></li>
		<li><a href="#End-credits">End-credits</a></li>
		<li><a href="#Topics">Topics</a></li>
	</ul> -->

	<!-- <section class="Chapter">
		<h2>Chapters</h2>
		<?php wp_nav_menu( array( 'menu' => 'chapters', 'menu_class' => 'Nav' ) ); ?>
	</section> -->

	*/ ?>

	<?php /*

	*/ ?>

	<section class="Chapter">
		<h2 id="Preface"><a href="/chapters/preface">Preface</a></h2>
		<p>“<em>Sometimes magic is just someone spending more time on something than anyone else might reasonably expect</em>” <cite>— Teller</cite>.</p>

		<?php $query = new WP_Query('category_name=preface&posts_per_page=-1&orderby=menu_order&order=asc'); ?>

		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="Front-end"><a href="/chapters/front-end">Front-end</a></h2>
		<p>Technical notes on front-end development HTML, CSS and JavaScript.</p>
		<?php $query = new WP_Query('category_name=front-end&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="Architecture"><a href="/chapters/architecture">Architecture</a></h2>
		<p>Thoughts on front-end architecture.</p>
		<?php $query = new WP_Query('category_name=architecture&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="Aspects"><a href="/chapters/aspects">Aspects</a></h2>
		<p>Ideas and approaches that you can apply to your challenges.<br>A wider range of concepts and solutions for your problems.</p>

		<?php $query = new WP_Query('category_name=aspects&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="Tools-Workflow"><a href="/chapters/workflow-tools">Tools &amp; Workflow</a></h2>
		<p>These web is filled with tools to create. Use them.</p>

		<?php $query = new WP_Query('category_name=tools-workflow&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="Articles"><a href="/chapters/articles">Articles</a></h2>
		<p>These will be moved into different chapters. Also see a list of <a href="https://www.dropbox.com/s/aeuq2p7qtnvf91l/codesandnotes%20drafts.png" target="_blank">articles</a> I'm <a href="/images/codesandnotes-drafts-2014-august.png" target="_blank">currently working on</a>. If there's a topic you're particularly interested in, <a href="/about">let me know</a>.</p>

		<?php $query = new WP_Query('category_name=articles&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Chapter">
		<h2 id="End-credits"><a href="/chapters/end-credits">End credits</a></h2>

		<?php $query = new WP_Query('category_name=end-credits&posts_per_page=-1&orderby=menu_order&order=asc'); ?>
		<ul class="Toc">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php endwhile; ?>
		</ul>
	</section>

	<section class="Topics">
		<h2 class="Topics-title">Topics</h2>
		<p>Explore topics across all chapters.</p>
		<?php wp_tag_cloud(
		"&number=30".
		"&orderby=count".
		"&order=DESC".
		"&format=list".
		"&taxonomy=post_tag"); ?>
	</section>

	<?php get_search_form(); ?>

	<div class="Newsletter">
		<h3>Get updates on Codes &amp; Notes</h3>
		<p>Sign up to be notified if something drastic happens to the project.</p>
		<!-- Begin MailChimp Signup Form -->
		<div id="mc_embed_signup">
			<form action="//codesandnotes.us8.list-manage.com/subscribe/post?u=d5f64c3f47749a54b871ed16b&amp;id=a97fcee0c4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div class="mc-field-group">
					<label for="mce-EMAIL" style="display: block;">Email</label>
					<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
				</div>
				<div id="mce-responses" class="clear">
					<div class="response" id="mce-error-response" style="display:none"></div>
					<div class="response" id="mce-success-response" style="display:none"></div>
				</div>
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<div style="position: absolute; left: -5000px;"><input type="text" name="b_d5f64c3f47749a54b871ed16b_a97fcee0c4" tabindex="-1" value=""></div>
				<div class="clear">
					<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="Button">
				</div>
			</form>
		</div>
		<!--End mc_embed_signup-->
	</div>

</main>

<?php get_footer(); ?>
