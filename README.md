# Socha Dev

[![Build Status](https://travis-ci.org/SochaDev/sochadev.github.io.svg?branch=master)](https://travis-ci.org/SochaDev/sochadev.github.io)

Welcome to the new [Socha Dev](http://sochadev.com) site! We got tired of paying
for hosting, so we ported the whole thing over here to GitHub Pages. Enjoy!

## Development and Building

[Gulp](http://gulpjs.com/) stuff:

* `npm install` `npm install --global gulp` - initial setup.
* `gulp css` - _fast_ compilation of scss to css (with sourcemaps).
* `gulp watch` - compilation of scss to css, as scss changes.
* `gulp watch-reload` - as above, but with [LiveReload](http://livereload.com/).
* `gulp sprites` - sprite generation.
* `gulp production` - production output (autoprefixes, uglifies and concats css and js).

[Jekyll](https://jekyllrb.com/) stuff:

* `bundle install` - initial setup.
* `bundle exec jekyll build --watch` - watch and rebuild to local `_site` dir, as anything changes.

## Running tests

* Download the [latest ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) to site root.
* Run `./chromedriver --port=4444 --url-base=wd/hub`
* Open a new shell and execute the test runner: `./node_modules/intern/bin/intern-runner.js config=tests/intern/intern`

## Content

* Update [team data](_data/team.yml), [project data](_data/projects.yml), [sandbox stuff](_data/sandbox.yml)
* [Notes on adding hero images](assets/images/heroes)
* To enable AngularJS support in the default layout, add these params to your Front Matter:

<pre><code>angular: true
angularApp: myApp
scripts: [
  "/sandbox/apps/my-app/script1.js",
  "/sandbox/apps/my-app/script2.js",
  "/sandbox/apps/my-app/script3.js"
]
</code></pre>
