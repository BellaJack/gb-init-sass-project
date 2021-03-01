// COMPONENTS
var path = require("path");

// PATHS
var base_path = path.join(__dirname, "..", "..");
var proj_path = base_path;
var tasks_path = path.join(proj_path, "task", "gulp");

// DEV
var dev_path = path.join(proj_path, "dev");
var sass_path = path.join(dev_path, "sass");
var css_dev_path = path.join(dev_path, "css");
var js_dev_path = path.join(dev_path, "js");
var conf_path = path.join(dev_path, "conf");
var img_dev_path = path.join(dev_path, "img");
// PROD
var prod_path = path.join(proj_path, "prod");
var css_prod_path = path.join(prod_path, "css");
var js_prod_path = path.join(prod_path, "js");
var img_prod_path = path.join(prod_path, "img");

// EXPORTS
exports.base_path = base_path;
exports.proj_path = proj_path;
exports.tasks_path = tasks_path;
exports.sass_path = sass_path;
exports.css_dev_path = css_dev_path;
exports.js_dev_path = js_dev_path;
exports.img_dev_path = img_dev_path;
exports.conf_path = conf_path;
exports.css_prod_path = css_prod_path;
exports.js_prod_path = js_prod_path;
exports.img_prod_path = img_prod_path;
