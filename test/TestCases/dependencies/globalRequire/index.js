define(["require"], function(req) {
	it("should load dep from global context", function(done) {
		require(["./asyncDep", "asyncDep"], function(asyncDep1, asyncDep2) {
			try {
				asyncDep1.should.be.eql("global asyncDep");
				asyncDep2.should.be.eql("local asyncDep");
				require("./asyncDep").should.be.eql("global asyncDep");
				require("../globalContext/asyncDep").should.be.eql("global asyncDep");
				require("asyncDep").should.be.eql("local asyncDep");
				done();
			} catch (e) {
				done(e);
			}
		});
	});
	it("should load dep from local context", function(done) {
		req(["./asyncDep", "asyncDep"], function(asyncDep1, asyncDep2) {
			try {
				asyncDep1.should.be.eql("local asyncDep");
				asyncDep2.should.be.eql("local asyncDep");
				req("./asyncDep").should.be.eql("local asyncDep");
				req("../test/asyncDep").should.be.eql("local asyncDep");
				req("asyncDep").should.be.eql("local asyncDep");
				done();
			} catch (e) {
				done(e);
			}
		});
	});
});
