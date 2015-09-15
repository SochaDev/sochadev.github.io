# Socha Dev

[![Build Status](https://travis-ci.org/SochaDev/sochadev.github.io.svg?branch=master)](https://travis-ci.org/SochaDev/sochadev.github.io)

Welcome to the new [Socha Dev](http://sochadev.github.io) site! We got tired of paying
for hosting, so we ported the whole thing over here to GitHub Pages. Enjoy!

## Development and Building

[Gulp](http://gulpjs.com/) stuff:

* `npm install` - initial setup.
* `gulp css` - _fast_ compilation of scss to css (with sourcemaps).
* `gulp watch` - compilation of scss to css, as scss changes.
* `gulp watch-reload` - as above, but with [LiveReload](http://livereload.com/).
* `gulp sprites` - sprite generation.
* `gulp production` - production output (autoprefixes, uglifies and concats css and js).

[Jekyll](https://jekyllrb.com/) stuff:

* `bundle install` - initial setup.
* `bundle exec jekyll build --watch` - watch and rebuild to local `_site` dir, as anything changes.

### TODO

* `@mistressofdrupal` - Build a micro RESTful API using either Slim or Phalcon (private SD repo plz), make sure a base path of `https://wintermute.sochadev.com/api-www` exists and can handle POST and GET, reject all other verbs with a 403. Ping `@natemow` for SSL or alias setup or whatever on `wintermute` as needed. API should also make sure that cross-origin requests are handled from `sochadev.github.io`, `sochadev.com` and `local.sochadev`; all other domains should throw a 403. We need `status` (HTTP response int) and `messages` (array) included in all API responses. Update `assets/js/app.js::theme.contactForm` jQuery `$.post` and/or `.respond` handler to reflect API JSON responses.

* `@jeffeoff` - Would be great if any span with the current `dotted` class could actually just pop a Bitters tooltip instead; update `/assets/js/app.js::theme` with a new func to handle those (or just do more Bitters-esque stuff to spans if more appropriate). Update copy as needed if tooltips are a better context for highlighted buzzword.

* `@jeffeoff` - Need all of `/_includes/projects.html` built out; update `/assets/js/app.js` with Bitters modal stuffs.

* `@jeffeoff` - Dunno if Bourbon/Bitters/whatever has built-in stuff for 508 compliance (e.g. `.sr-only` in Bootstrap) -- but we'd also get `pro` points if we could make our HTML5 document outline have legit headings and stuff. @see [this](https://gsnedders.html5.org/outliner/)

* `@jeffeoff` - Audit everything ever because you are way more `in touch` than `@natemoo` is and you know what's actually cool these days.

* `@jasonsocha` - Apply seal-of-approval to above and point the `sochadev.com` domain. To do that we'll need this stuff:

  * Add a `CNAME` file to repo root with 1 line in it: `sochadev.com`. Confirm this is acknowledged under project settings (you should see "Your site is published at http://sochadev.com" in a minute or so).
  * Add DNS `A` records for `192.30.252.153`, `192.30.252.154`, remove existing record.
  * Add DNS `CNAME` record for `www.sochadev.com` pointing to `sochadev.github.io`.
