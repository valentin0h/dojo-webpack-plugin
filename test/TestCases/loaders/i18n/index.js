const should = require("should").default;
define(["require", "dojo/_base/config", "dojo/has", "dojo/i18n!./nls/strings1", "dojo/i18n!./nls/strings2"], function(require, config, has, strings1, strings2) {
	const lang = config.locale ? config.locale : "default";
	it(`should load strings for ${lang} language`, function() {
		strings1.hello.should.be.eql(lang === "fr" && !has("empty-locales")? "Bonjoure" : lang === "es" && !has("empty-locales") ? "Hola" : lang === "en-au" && !has("empty-locales") ? "G'day" : "Hello");
		strings2.goodby.should.be.eql(lang === "fr" && !has("empty-locales") ? "Bon par" : lang === "de" && !has("empty-locales") ? "Auf Wiedersehen" : "Good by");
	});
	if (!has("empty-locales")) {
		it("should load locale specific strings", function() {
			// load a locale specific bundle
			require("./nls/fr/strings1").hello.should.be.eql("Bonjoure");
		});
	} else {
		it("should fail to load locale specific strings", function() {
			try {
				require("./nls/fr/strings1");
				should.fail("Callback should not be called");
			} catch (e) {}
		});
	}
});
