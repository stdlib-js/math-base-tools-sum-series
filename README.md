<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sum-series

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the sum of an [infinite series][infinite-series].



<section class="usage">

## Usage

```javascript
import sumSeries from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@deno/mod.js';
```

#### sumSeries( generator\[, options ] )

Computes the sum of the series given by the supplied `generator` argument. `generator` can be either an ES6 [Generator object][es6-generator] or a function which returns successive elements of the series at each invocation.

Using an ES6 [Generator object][es6-generator]:

<!-- eslint-disable no-restricted-syntax -->

```javascript
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';
var gen = geometricSeriesGenerator( 0.9 );
var out = sumSeries( gen );
// returns 10

function* geometricSeriesGenerator( x ) {
    var exponent = 0;
    while ( true ) {
        yield pow( x, exponent );
        exponent += 1;
    }
}
```

Alternatively, one can use a closure to achieve the same goal:

```javascript
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';
var gen = geometricSeriesClosure( 0.9 );
var out = sumSeries( gen );
// returns 10

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

The `function` accepts the following `options`:

-   **maxTerms**: integer denoting the maximum number of terms to be summed. Default: `1000000`.
-   **tolerance**: number specifying the tolerance used to assess convergence. Default: `2.22e-16`.
-   **initialValue**: number specifying the initial value of the returned sum. Default: `0`.

By default, the initial value of the sum is `0`. To choose a different one, use the `initialValue` option.

```javascript
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'initialValue': 1
});
// returns 3

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

To change the maximum number of terms to be summed, set the `maxTerms` option.

```javascript
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'maxTerms': 10
});
// returns ~1.998 (infinite sum is 2)

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

The default tolerance of `2.22e-16` used to assess convergence can be changed via the `tolerance` option.

```javascript
import pow from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@deno/mod.js';

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'tolerance': 1e-3
});
// returns ~1.998

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
import log1p from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@deno/mod.js';
import sumSeries from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@deno/mod.js';

function* log1pSeries( x ) {
    var mMult = -x;
    var mProd = -1;
    var k = 0;
    while ( true ) {
        mProd *= mMult;
        k += 1;
        yield ( mProd / k );
    }
}

console.log( 'log1p(0.5) evaluated via math-log1p module: %d', log1p( 0.5 ) );
console.log( 'log1p(0.5) evaluated via infinite series expansion: %d', sumSeries( log1pSeries( 0.5 ) ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-sum-series.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-sum-series

[test-image]: https://github.com/stdlib-js/math-base-tools-sum-series/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-sum-series/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-sum-series/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-sum-series?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-sum-series.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-sum-series/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-sum-series/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-tools-sum-series/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-tools-sum-series/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-tools-sum-series/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-sum-series/main/LICENSE

[infinite-series]: https://en.wikipedia.org/wiki/Series_%28mathematics%29

[es6-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

</section>

<!-- /.links -->
