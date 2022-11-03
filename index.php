<?php
/*
-------------------------------------------------------------------------
Verdanatech - Software Manager
Copyright (C)2018 by the Verdanatech Development Team.

http://verdanatech.com 
-------------------------------------------------------------------------- 
Original Author of file: Dionésio Guerra <dionesiojr@gmail.com>
--------------------------------------------------------------------------
*/

// Check PHP version not to have trouble
// Need to be the very fist step before any include
if (version_compare(PHP_VERSION, '5.6') < 0) {
	die('PHP >= 5.6 required');
}

use Glpi\Event;

global $error_vauth;
//Load GLPI constants
define('GLPI_ROOT', __DIR__);
include(GLPI_ROOT . "/inc/based_config.php");
include_once(GLPI_ROOT . "/inc/define.php");

define('DO_NOT_CHECK_HTTP_REFERER', 1);

// If config_db doesn't exist -> start installation
if (!file_exists(GLPI_CONFIG_DIR . "/config_db.php")) {
	include_once(GLPI_ROOT . "/inc/autoload.function.php");
	Html::redirect("install/install.php");
	die();
} else {
	$TRY_OLD_CONFIG_FIRST = true;
	include(GLPI_ROOT . "/inc/includes.php");
	$_SESSION["glpicookietest"] = 'testcookie';

	// For compatibility reason
	if (isset($_GET["noCAS"])) {
		$_GET["noAUTO"] = $_GET["noCAS"];
	}

	if (!isset($_GET["noAUTO"])) {
		Auth::redirectIfAuthenticated();
	}
	Auth::checkAlternateAuthSystems(true, isset($_GET["redirect"]) ? $_GET["redirect"] : "");

	$_SESSION['namfield'] = $namfield = uniqid('fielda');
	$_SESSION['pwdfield'] = $pwdfield = uniqid('fieldb');
	$_SESSION['rmbfield'] = $rmbfield = uniqid('fieldc');
}
function getConfigImg($name)
{
	global $DB;

	$documents_id = array();
	$query = "SELECT * FROM `glpi_plugin_skins_configs_img` WHERE `name` = '{$name}'";
	$result = $DB->query($query);
	if ($result) {
		$row_result = $DB->fetchAssoc($result);
		$documents_id = $row_result['documents_id'];

		$Document = new Document();
		$find_document = current($Document->find("id = {$documents_id}"));

		return ($find_document['filepath']);
	} else {
		$documents_id = false;
	}
	return $documents_id;
}

//função para pegar a imgem do banco de dados
function get_img_glpi($documents_id)
{
	$image = GLPI_DOC_DIR . "/$documents_id";

	// Read image path, convert to base64 encoding
	$imageData = base64_encode(file_get_contents($image));

	// Format the image SRC:  data:{mime};base64,{data};
	return 'data: ' . mime_content_type($image) . ';base64,' . $imageData;
}

$documents_id = getConfigImg('background');
if (empty($documents_id)) {
	$src_background = $CFG_GLPI["root_doc"] . "/plugins/skins/pics/background.png";
} else {
	$src_background = get_img_glpi($documents_id);
}

$documents_id_logo = getConfigImg('logo');
if (empty($documents_id_logo)) {
	$src_logo = './pics/login_logo_glpi.png';
} else {
	$src_logo = get_img_glpi($documents_id_logo);
}

//var_dump($background);

//$background = "{$CFG_GLPI["root_doc"]}/front/document.send.php?docid={$documents_id}";

?>
<!doctype html>
<html lang="<?php echo $CFG_GLPI["languages"][$_SESSION['glpilanguage']][3]; ?>">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="icon" href="<?php echo $CFG_GLPI["root_doc"]; ?>/pics/favicon.ico">

	<!-- Bootstrap core CSS -->
	<link rel="stylesheet" href="plugins/skins/src/bootstrap.min.css">

	<!-- Custom styles for this template -->
	<?php
	echo '<style>
			body{
				background-image:url("' . $src_background . '");
		}
		</style>';
	?>
	<style>
		html {
			height: 100%;
		}

		body {
			content: '';
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-position: center center;
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: cover;
		}

		.singin {
			color: #fff;
		}


		.form-signin {
			width: 100%;
			max-width: 330px;
			padding: 15px;
			margin: 0 auto;

			box-shadow: 0px 0px 20px 1px black;
			background-color: #FFF;

			padding-top: 10px;
			padding-bottom: 20px;
			padding-left: 20px;
			padding-right: 20px;
			border-radius: 15px;
			border-color: #ffffff;
			border-width: 5px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
		}

		.filter-black {
			position: fixed;
			/* Stay in place */
			z-index: 0;
			/* Sit on top */
			left: 0;
			top: 0;
			width: 100%;
			/* Full width */
			height: 100%;
			/* Full height */
			overflow: auto;
			/* Enable scroll if needed */
			background-color: rgba(0, 0, 0, 0.4);
			/* Black w/ opacity */
		}


		.form-signin .checkbox {
			font-weight: 400;
		}

		.form-signin .form-control {
			position: relative;
			box-sizing: border-box;
			height: auto;
			padding: 10px;
			font-size: 16px;
		}

		.form-signin .form-control:focus {
			z-index: 2;
		}

		.form-signin input[type="email"] {
			margin-bottom: -1px;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}

		.form-signin input[type="password"] {
			margin-bottom: 10px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}

		.copy {
			color: #fff;
		}

		#dropdown_auth1 {
			position: relative;
			box-sizing: border-box;
			height: auto;
			padding: 10px;
			font-size: 14px;
			display: block;
			width: 100%;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #ced4da;
			border-radius: 0.25rem;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		}


		@media (max-width: 500px) {

			.form-signin {
				box-shadow: none;
				max-width: none;
				max-height: none;
				height: 100%;
				border-radius: 0px;
			}
		}
	</style>


</head>

<body class="text-center">

	<div class="filter-black">
		<div class="form-signin">
			<form action="<?php echo $CFG_GLPI["root_doc"]; ?>/front/login.php" method="POST">

				<?php
				// Other CAS
				if (isset($_GET["noAUTO"])) {
					echo "<input type='hidden' name='noAUTO' value='1' />";
				}
				// redirect to ticket
				if (isset($_GET["redirect"])) {
					Toolbox::manageRedirect($_GET["redirect"]);
					echo '<input type="hidden" name="redirect" value="' . $_GET['redirect'] . '"/>';
				}
				?>

				<div class="img-signin">
					<img class="img-responsive center-block" src="<?php echo $src_logo ?>" alt="Verdanatech Soluções em TI" style="margin-top: 5px;"><br>
					<div style="color: #545454; text-align: center;">
						<?php
						echo nl2br(Toolbox::unclean_html_cross_side_scripting_deep($CFG_GLPI['text_login']));
						?>
					</div>

				</div>
				<?php
				function getConfig($id)
				{

					global $DB;
					$row = array();
					$query = "SELECT value  FROM `glpi_plugin_skins_configs` WHERE `id` = {$id}";
					$result = $DB->query($query);

					if ($result) {
						$row_result = $DB->fetchAssoc($result);
						return $row_result['value'];
					}
				}

				if (getConfig(1) == 1 || $_GET['skinslogin'] == 1) {
				?>
					<div style="margin-top: 5px;">
						<input type="text" name="<?php echo $namfield; ?>" id="login_name" class="form-control" placeholder="<?php echo __('Login') ?>" required autofocus>
						<br>
						<input type="password" name="<?php echo $pwdfield; ?>" id="login_password" class="form-control" placeholder="<?php echo __('Password') ?>">

						<div style="text-align: left;">
							<?php

							// Add dropdown for auth (local, LDAPxxx, LDAPyyy, imap...)
							if ($CFG_GLPI['display_login_source']) {
								Auth::dropdownLogin();
							}


							if ($CFG_GLPI["login_remember_time"]) {
								echo '<p>
								<label for="login_remember">
										<input type="checkbox" name="' . $rmbfield . '" id="login_remember"
										' . ($CFG_GLPI['login_remember_default'] ? 'checked="checked"' : '') . ' />
								' . __('Remember me') . '</label>
								</p>';
							}
							?>
						</div>

						<button class="btn btn-lg btn-primary btn-block singin" type="submit" name="submit" id="submit" value="submit">Login</button>

						<?php
						if (
							$CFG_GLPI["notifications_mailing"]
							&& countElementsInTable(
								'glpi_notifications',
								[
									'itemtype'  => 'User',
									'event'     => 'passwordforget',
									'is_active' => 1
								]
							)
						) {
							echo '<a id="forget" href="front/lostpassword.php?lostpassword=1">' .
								__('Forgotten password?') . '</a>';
						}

						?>

					</div>

				<?php
				}
				?>
				<br>
				<?php Html::closeForm(); ?>
				<div>
					<?php Plugin::doHook('display_login'); ?>
					<?php
					Html::closeForm();
					?>
				</div>
				<div>
					<img class="img-responsive center-block" src="plugins/skins/pics/verdanadesk.png" alt="" width="95"><br>
				</div>
		</div>
	</div>

	<!--
        <br>
        <p class="mt-5 mb-3 " style="color: #fff">&copy; Verdanatech - 2018 v 2.1.0</p>
    -->

</body>
<link rel="stylesheet" href="plugins/skins/toastr/build/toastr.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="plugins/skins/toastr/toastr.js"></script>
<?php

if (!empty($_SESSION['error_vauth'])) {

?>
	<script>
		$(document).ready(function() {
			var erros = <?php echo json_encode($_SESSION['error_vauth']); ?>;
			erros.forEach((error) => {
				toastr.error(error);
			})
		});
	</script>
<?php

	$_SESSION['error_vauth'] = [];
}

?>

</html>
