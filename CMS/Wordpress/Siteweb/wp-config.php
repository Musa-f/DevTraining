<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#msNXETM]`<fD<J:Af^=yv) ~O{&18N%9RIf+a65%:[wlWT|8]Q3GZ45F/Oh^/,)' );
define( 'SECURE_AUTH_KEY',  'd;VpRS2HUYf;;]B!Zt/UyUv#;/Y.bP{QhMNHj4-Hwu/y/KKBN;R<Bf`z3}_L38T@' );
define( 'LOGGED_IN_KEY',    'W0zl+1X9bw2I1P)T#,A/^q>tGe-=uv#kc]?RANV>6?nc?(QJb={9d19C;*S9V@BT' );
define( 'NONCE_KEY',        'mpB,6*]dc ,3q9pE$T&_*{h!Xm#1W@@PNNZ+aQpMY0lo(i][7%c7]}p%Kb8`<Ds|' );
define( 'AUTH_SALT',        'oNfnE6LjD:uqN7,2@6l6:@j_oS+*GQ [BI[E@ q!K$fnU~64kf<7|kR(~(Ueh4>=' );
define( 'SECURE_AUTH_SALT', '|JXUO wYCe%Ps/0m4q~c;diis&n9fDvqZbn[9d+[,c{~?%`C$rQ731y)LQNVaHxY' );
define( 'LOGGED_IN_SALT',   'eT&z_4,f4,XD*! ?zxYv4)/S[3Udu{sX|#C ;:{;AH1<ot]xJmrw;xh]Fz{X.qqO' );
define( 'NONCE_SALT',       'p4IxloZar|*13P|O2|x]IZ9%SB:Y{6~ A9m$^n=e5[iL{Y:=Oo0@89fkeM{=;uT[' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
