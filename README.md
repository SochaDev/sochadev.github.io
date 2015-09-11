# sochadev.github.io

[![Build Status](https://travis-ci.org/SochaDev/sochadev.github.io.svg?branch=master)](https://travis-ci.org/SochaDev/sochadev.github.io)

Welcome to the new [Socha Dev](http://sochadev.github.io) site! We got tired of paying 
for hosting, so we ported the whole thing over here to GitHub pages. Enjoy!

## Development and Building

Front-end stuff:

* `npm install` - initial setup.
* `gulp css` - _fast_ compilation of scss to css (with sourcemaps).
* `gulp watch` - compilation of scss to css, as scss changes.
* `gulp watch-reload` - as above, but with [livereload](http://livereload.com).
* `gulp sprites` - sprite generation.
* `gulp production` - production output (autoprefixes, uglifies and concats css and js).

Jekyll stuff:

* `bundle install` - initial setup.
* `bundle exec jekyll build --watch` - watch and rebuild to local `_site` dir as anything changes.

