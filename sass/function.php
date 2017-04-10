<?php

function register_styles(){
	wp_register( 'my-style', get_template_directory_url() . '/style.css'; );
	wp_enqueue_style( 'my-style' );
}
add_action( 'wp_enqueue_scripts', 'register_styles' );