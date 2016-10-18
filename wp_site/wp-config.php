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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wpapp');

/** MySQL database username */
define('DB_USER', 'wpapp');

/** MySQL database password */
define('DB_PASSWORD', 'wp4pp5ap');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ']K5MVZdutbmIlKrINg3}/gkwK!a$qZ.G@V)3fgUsPL(CY)xLs9UKL)q`FsO3W|R|');
define('SECURE_AUTH_KEY',  'a%fP#)sWf=^2klsRdr?7RjDI6!X7?5>N<B#:y@N.d3<BRDhyTF*,O)jv;Kc3l0R/');
define('LOGGED_IN_KEY',    'WQke2xPA/%QtOM1LANH+$My)d$_;eCE#>e|uNkh3Fi!QM#$x8U+Gda,Od{FEf@iq');
define('NONCE_KEY',        'swlwzZOF,|2;(|R%j-#oo`Jz!%;@z?xTae.aEvv9H~j=H,$] }L9D|F4GzZ$@jiP');
define('AUTH_SALT',        ' LH%>`RMl~N5Wo.>5L;(z.h@Mv(JAXh{d:6:fWc:+e~MvjfzU=c?_$RPhRjh(fCM');
define('SECURE_AUTH_SALT', 'rqsNAiQ6dN.lh81I}F;h+pP$~WxydBjYGLp}b5X hxigBSJ-XEndVo=-0AKF)(oG');
define('LOGGED_IN_SALT',   '(M5z90}3m-uy-<<EVc}5Z<RDdJQ7+{7eyDigb,4/Oe+q>LhYeU{]WKHpy7xE=37{');
define('NONCE_SALT',       '7Lt)!t<bS}vM%/zuL@rrP}DGcHgLzk:)U?lF<[J>-^qjE}lVm0yURdP1}&AYu8R^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpapp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
