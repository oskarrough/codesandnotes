<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package rough
 */
?><!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<title><?php wp_title( '–', true, 'right' ); ?></title>
	<meta name="description" content="An online book and reference for web development that you can trust">
	<link rel="stylesheet" type="text/css" href="/rough.css" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php do_action( 'before' ); ?>

	<header class="SiteHeader">
		<h1 class="SiteTitle"><a href="http://codesandnotes.com/" rel="home">
			<!-- <span class="Codes">{Codes}</span> <span class="And">&amp;</span> <span class="Notes">‘Notes’</span> -->
			<img src="/images/codesandnotes.png" alt="Codes &amp; Notes">
		</a></h1>
		<p class="SiteDescription">by <a href="http://oskarrough.com" rel="author" target="_blank">Oskar Rough Mosumgaard</a></p>
	</header>
