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
define('AUTH_KEY',         'P9AjuCIuZggxQ/5off/fJVT2xrH7OUgcOJtsvWDY69orPDOxGZvJhzPu+1URWcmTWtnW+caO1h4XbReg/T6TuA==');
define('SECURE_AUTH_KEY',  'ZDmLouhPYmzi0jyqhvQBIw9RYxVDet936rHK2GnvNLKbpv6O2Y7Rt6Qdcv89USE3tv6nHLwco9Ff893ZuKW8qQ==');
define('LOGGED_IN_KEY',    'Kydipo95w1TAPvl0yLYeooBwkSBg0GdXUkriZIFBHT3lk/1lJe88JuX2Sh24lhZWRytughGcg7+J1qlTfHCuHg==');
define('NONCE_KEY',        'ppVQoyxrUtCwECOn2G/RDDqraQqgMdV56Pmf90tNw/dpRpCHQ/NQMwoOZGZNyid036Px59IRfb9DdkNmIBCEEQ==');
define('AUTH_SALT',        '1X1BOYDYLhhD94qtkXkfkQAQn1SBfagW+5IeUpHnRpLQBsQY1zrqu5/Xo2y7e72a1mqYnWdblIH5SQgQG0POmA==');
define('SECURE_AUTH_SALT', 'YM3ah7i6I3OQA4vCwkMFf3iYbCx63zL/zcYV6OaVI1V+wn60ekn0fT80sgEAM4UlAXEYZzUsAOTgE4HJEPUGBg==');
define('LOGGED_IN_SALT',   'pARsGzZGme0Kmh+N2avR9GTlMYnfbfaPlnDolda6BrmTGDXJzYcSaPsYxfzpojQFLokJcUMm7qYUiQZZuXopIA==');
define('NONCE_SALT',       '9ev5wp2AEHwPkSuKao5XAmDhzovyAum/bfdmXV/F7Lb9RQGE8LUwRZEmT/K5foeVLea2cEr6TIMSaMzf+JRj3Q==');

define('JWT_AUTH_SECRET_KEY', 'my_key');
define('JWT_AUTH_CORS_ENABLE', true);

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
