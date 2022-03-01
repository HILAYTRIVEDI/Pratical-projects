<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jEvEQsnZRzD1F9RNHTZP6JOl+UBbsR9tookWA1HU/lcmQAy2K8y2rrZ7DVq4WgX61Al3lvYOKmNqWxb4HvS+yA==');
define('SECURE_AUTH_KEY',  'Of8Es1JZnIYff0L6hpGkt9qQFuBf69cLI5tf5tm/cDy26MLSa1A88WpRM5CZHeFK/GMEumogVg0hj3/ezWLpLA==');
define('LOGGED_IN_KEY',    'Zfqu0Au8qUnSCaAJZQ8V1OlC7VVjEjn8QH+EsTLictjd5kpxklG/dliaLfKxYqP5kcjNBnK0AUWGQo0UAJoLNQ==');
define('NONCE_KEY',        'vqPCff1L/Ac6tWBMq3oH6sny1DXfP486+VMC4w45BA1HlT6C88eb0bZVA+RZLWxcvHIkwe8OKiiiRROPZ0mB3g==');
define('AUTH_SALT',        'b3SM5aY+OGwQZ9JU2qnKgew+0PvYUN7t0DIa4Qo80HLYO6W7jqnp5LnL9GGX7lH2yHaeEOR6djdtgsafEtvRbQ==');
define('SECURE_AUTH_SALT', '4pY97jOyYtqwpF5u4iwlOH2W6sGs/TpuL6NoODYbYFy2mxZ+YflBt6lKr866IYYoYj4tayJlmiOZXuQj8n0U5Q==');
define('LOGGED_IN_SALT',   'SLoBh2O3e0acD3ioOjBR0mx5eoiB6E4hRUw/PxPv6i7oscg055BBy5k55v4V6P8HkV6jO3TuglqIlfzHy2S2SA==');
define('NONCE_SALT',       'GYEzB3YICH5tKq2B6UStTSsmfINw1U+eRCxwjHSyGDE10PDA2wrPbfnAtzfuD/dgj+6zxbPOMD6Iwrag3oo1QA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
