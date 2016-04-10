const Applet = imports.ui.applet;
const Util = imports.misc.util;

function CodePaste(orientation, panel_height, instance_id) {
	this._init(orientation, panel_height, instance_id);
}

CodePaste.prototype = {
	__proto__: Applet.IconApplet.prototype,

	_init: function(orientation, panel_height, instance_id) {
		Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

		this.set_applet_icon_name("Code Paste");
		this.set_applet_tooltip(_("Share code with others"));
	},

	on_applet_clicked: function() {
		//Util.spawn('xkill');
	}
};

function main(metadata, orientation, panel_height, instance_id) {
	return new CodePaste(orientation, panel_height, instance_id);
}

