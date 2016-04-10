const Applet = imports.ui.applet;
const Util = imports.misc.util;
const Main = imports.ui.main;
const St = imports.gi.St;
const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const ModalDialog = imports.ui.modalDialog;
const PopupMenu = imports.ui.popupMenu;
const Settings = imports.ui.settings;
const GLib = imports.gi.GLib;


const UUID = "CodePaste@dirk103";


function CodePaste(orientation, panel_height, instance_id) {
	this._init(orientation, panel_height, instance_id);
}

CodePaste.prototype = {
	__proto__: Applet.IconApplet.prototype,

	_createMenu: function(orientation) {
		let menuManager = new PopupMenu.PopupMenuManager(this);
		let menu = new PomodoroMenu(this, orientation);

		menu.connect('paste-clipboard', Lang.bind(this, function() {
		    let command = "gnome-open '%s'".format("http://www.fatsex.com");
		    Util.trySpawnCommandLine(command);
		}));

		menuManager.addMenu(menu);

		return menu;
	}


	_init: function(orientation, panel_height, instance_id) {
		Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

		this.set_applet_icon_name("Code Paste");
		this.set_applet_tooltip(_("Share code with others"));
		
		global.logError("fuckery");
        this._appletMenu = this._createMenu(orientation);
	},

	on_applet_clicked: function() {
		//this._appletMenu.toggle();
	}


};

function main(metadata, orientation, panel_height, instance_id) {
	return new CodePaste(orientation, panel_height, instance_id);
}

function CodePasteMenu(launcher, orientation) {
    this._init.call(this, launcher, orientation);
}


CodePasteMenu.prototype = {
    __proto__: Applet.AppletPopupMenu.prototype,

    _init: function(launcher, orientation) {
        Applet.AppletPopupMenu.prototype._init.call(this, launcher, orientation);

        this._addMenuItems();
    },

    _addMenuItems: function() {
        let pasteclipboard = new PopupMenu.PopupMenuItem(_("Paste Clipboard"));

        pasteclipboard.connect("activate", Lang.bind(this, function() {
            this.emit('paste-clipboard');
        }));

        this.addMenuItem(pasteclipboard);
	}
}
