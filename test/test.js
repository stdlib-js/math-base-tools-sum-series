/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var detectGeneratorSupport = require( '@stdlib/assert-has-generator-support' );
var log1p = require( '@stdlib/math-base-special-log1p' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var sumSeries = require( './../lib' );
var sumSeriesBasic = proxyquire( './../lib', {
	'detect-generator-support': function getFalse() { return false; }
});


// VARIABLES //

var hasGeneratorsSupport = detectGeneratorSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sumSeries, 'function', 'main export is a function' );
	t.end();
});

// Run generator function tests if environment supports `function*()`...

if ( hasGeneratorsSupport ) {
	require( './es2015-generator' ); // eslint-disable-line stdlib/no-unassigned-require
}

tape( 'the function calculates the sum of an infinite series provided by a closure', function test( t ) {
	var expected = log1p( 0.5 );
	var actual = sumSeries( closure( 0.5 ) );

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure( x ) {
		var mMult = -x;
		var mProd = -1;
		var k = 0;

		return function next() {
			mProd *= mMult;
			k += 1;
			return ( mProd / k );
		};
	}
});

tape( 'the function calculates the sum of an infinite series provided by a closure (when generators are not supported)', function test( t ) {
	var expected = log1p( 0.5 );
	var actual = sumSeriesBasic( closure( 0.5 ) );

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure( x ) {
		var mMult = -x;
		var mProd = -1;
		var k = 0;
		return function next() {
			mProd *= mMult;
			k += 1;
			return ( mProd / k );
		};
	}
});

tape( 'the function calculates the sum of an infinite series with a specified initial value', function test( t ) {
	var expected = log1p( 0.5 ) + 2;
	var actual = sumSeries( closure( 0.5 ), {
		'initialValue': 2
	});

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure( x ) {
		var mMult = -x;
		var mProd = -1;
		var k = 0;

		return function next() {
			mProd *= mMult;
			k += 1;
			return ( mProd / k );
		};
	}
});

tape( 'the function calculates the sum of an infinite series with a specified initial value (when generators are not supported)', function test( t ) {
	var expected = log1p( 0.5 ) + 2;
	var actual = sumSeriesBasic( closure( 0.5 ), {
		'initialValue': 2
	});

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure( x ) {
		var mMult = -x;
		var mProd = -1;
		var k = 0;

		return function next() {
			mProd *= mMult;
			k += 1;
			return ( mProd / k );
		};
	}
});

tape( 'the function calculates the sum of a user-defined number of terms of the series', function test( t ) {
	var expected = 6;
	var actual = sumSeries( closure( 0.5 ), {
		'maxTerms': 3
	});

	t.equal( actual, expected, 'returned result is equal to expected value. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure() {
		var k = 1;

		return function next() {
			return k++; // eslint-disable-line no-plusplus
		};
	}
});

tape( 'the function calculates the sum of a user-defined number of terms of the series (when generators are not supported)', function test( t ) {
	var expected = 6;
	var actual = sumSeriesBasic( closure( 0.5 ), {
		'maxTerms': 3
	});

	t.equal( actual, expected, 'returned result is equal to expected value. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function closure() {
		var k = 1;

		return function next() {
			return k++; // eslint-disable-line no-plusplus
		};
	}
});
