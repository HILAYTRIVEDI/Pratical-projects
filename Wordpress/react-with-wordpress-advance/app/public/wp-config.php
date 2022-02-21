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
define('AUTH_KEY',         'enPru822hvnixnzoHL6Jjkm6KQDWISwcojyqZPM9TifUfOb/l3Q738QrExV3DbQH80hUzcrnY55fvskHH0MYjA==');
define('SECURE_AUTH_KEY',  'CcVEmH/LDrwdw4+OntRJz8usm7b+13zmkGqdAdWHpo2MjIW+Zqat5XOra9xXB8zHXzCUBmHhh+7CaShk1nHZnA==');
define('LOGGED_IN_KEY',    '6jQnu5NhEY0nSyQciFnTnIGfEDAn1z370XBz3vrUR2GkeO/UcG6ESASBq9lx7b05vX75QSyyeKBanHWyS8uzqQ==');
define('NONCE_KEY',        't8llpw0BWtTMoqf9XlSrncXmngOLSS5Pz4nVtbpKXk4tuyIccTGvKmFTW7Mtqjhc2I42OZKtAD5tu7GAGpkaKw==');
define('AUTH_SALT',        'gVhyvzcLtmm4815lWom8k0phz/nEB6t495t2INY+xZQEmWXfvrcz1T4i1G2+83IvO47FNlvcqrrZEcXrc+j5aQ==');
define('SECURE_AUTH_SALT', 'zJSG4tReKo6ihfaTWGy/3Johoxx2C5/aOLsP/SrWkyanlOyTKwueYjteAS8VqmZXXOxeGvPBg4V4VuW6+pzeWw==');
define('LOGGED_IN_SALT',   'FFvbKfZ/+RQIkQ/Yn46YyyQkwpCkwWk71dzvzCxswKYatO+be+k/FbqyDeQpXFX8KqnACK9WcDiDj9tiqSeHGQ==');
define('NONCE_SALT',       'DNArPw0Zd3fDlKfbLfddOF7dTm4jhJl/5ubO8i/mC9Bv+63uit9knDC7nZY84YLpgBubgrU6AeG7Q04xnxxn5Q==');

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
