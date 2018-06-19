const assert = require("assert");
const chai = require("chai");

const userRouterReg = require("../lib/routerReg");

/*
if(userRouterReg.test("/user/lihua") === false){
	console.log("Error routerReg to: " + "/user/lihua")
}

if(userRouterReg.test("/user/lihua/") === true){
	console.log("Error routerReg to: " + "/user/lihua/")
}

if(userRouterReg.test("/userxx/lihua") === true){
	console.log("Error routerReg to: " + "/userxx/lihua")
}

if(userRouterReg.test("/user/6666lihua") === true){
	console.log("Error routerReg to: " + "/user/6666lihua")
}

if(userRouterReg.test("/user/lihua/li") === true){
	console.log("Error routerReg to: " + "/user/lihua/li")
}

if(userRouterReg.test("/user/") === true){
	console.log("Error routerReg to: " + "/user/")
}
*/


/*
assert.equal(userRouterReg.test("/user/lihua"),true)

assert.equal(userRouterReg.test("/user/lihua/"),false)

assert.equal(userRouterReg.test("/userxx/lihua"),false)

assert.equal(userRouterReg.test("/user/666lihua"),false)

assert.equal(userRouterReg.test("/user/lihua/li"),false)

assert.equal(userRouterReg.test("/user/"),false)
*/


/*chai.should()

userRouterReg.test("/user/lihua").should.equal(true)

userRouterReg.test("/user/lihua/").should.equal(false)

userRouterReg.test("/userxx/lihua").should.equal(false)

userRouterReg.test("/user/666lihua").should.equal(false)

userRouterReg.test("/user/lihua/li").should.equal(false)

userRouterReg.test("/user/").should.equal(false)*/



describe( userRouterReg + " RegExp for [[ /user/{{name}} ]] ",()=>{
	describe("for [[ /user/lihua ]]",()=>{
		it("should return true",()=>{
			chai.expect(userRouterReg.test("/user/lihua"),true);
		});
	});

	describe("for [[ /user/lihua/ ]]",()=>{
		it("should return false",()=>{
			chai.expect(userRouterReg.test("/user/lihua/"),false);
		});
	});

	describe("for [[ /userxx/lihua ]]",()=>{
		it("should return false",()=>{
			chai.expect(userRouterReg.test("/userxx/lihua"),false);
		});
	});

	describe("for [[ /user/666lihua ]]",()=>{
		it("should return false",()=>{
			chai.expect(userRouterReg.test("/user/666lihua"),false);
		});
	});

	describe("for [[ /user/lihua/li ]]",()=>{
		it("should return false",()=>{
			chai.expect(userRouterReg.test("/user/lihua/li"),false);
		});
	});

	describe("for [[ /user/ ]]",()=>{
		it("should return false",()=>{
			chai.expect(userRouterReg.test("/user/"),false);
		});
	});
});

















