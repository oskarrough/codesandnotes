<?php
/**
 * The template for displaying search forms in rough
 *
 * @package rough
 */
?>
<form method="get" id="Search" class="Search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php _ex( 'Search for:', 'label', 'rough' ); ?></span>
		<input type="search" class="Search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'rough' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s">
	</label>
	<input type="submit" class="Search-submit" value="<?php echo esc_attr_x( 'Search', 'submit button', 'rough' ); ?>">
</form>
