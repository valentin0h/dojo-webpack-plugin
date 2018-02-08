define(["require", "./a"], function(require, a) {
	it("should successfully undefine the module and then load it again", function(done) {
		a.label.should.be.eql("a");
		require("./a").should.be.eql(a);
		require.undef("./a");
		try {
			require("./a");
			return done(new Error("Shouldn't get here"));
		} catch (e) {}
		require(["./a"], function(_a) {
			a.should.be.eql(_a);
			(a === _a).should.be.false;
			require.undef("./a");
			try {
				require("./a");
				return done(new Error("Shouldn't get here"));
			} catch (e) {}
			var dep = "./a";
			require([dep], function(__a) {
				a.should.be.eql(__a);
				(a === __a).should.be.false;
				(_a === __a).should.be.false;
				done();
			});
		});
	});
});
