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

* `@mistressofdrupal` - Build a micro RESTful API using either Slim or Phalcon (private SD repo plz), make sure a base path of `https://wintermute.sochadev.com/api-www` exists and can handle POST and GET, reject all other verbs with a 403. Ping `@natemow` for SSL or alias setup or whatever on `wintermute` as needed. API should also make sure that cross-origin requests are handled from `sochadev.github.io`, `sochadev.com` and `local.sochadev`; all other domains should throw a 403. We need `status` (HTTP response int) and `messages` (array) included in all API responses. Update `assets/js/app.js::theme.contactForm` jQuery `$.post` and/or `.respond` handler to reflect API responses.

* `@mistressofdrupal` - Would be nice if we had some basic JS validation + scrollTo for contact form fields with `required` attr (i.e. outside of built-in browser handling).

* `@jeffeoff` - Pull whatever sizes we need for favicon from `https://avatars2.githubusercontent.com/u/1489168?v=3&s=36` (note `s` param), update `/assets/favicon/*` files; also add legacy root `/favicon.ico` (dunno if symlinks to `/assets/favicon/favicon.ico` are possible with GH pages).

* `@jeffeoff` - Thread in appropriate `font-awesome` stuff for all the placeholder N columns on the homepage. Salt whatever `font-awesome` stuff as needed throughout our whopping 2 pages.

* `@jeffeoff` - Would be great if any span with the current `dotted` class could actually just pop a Bitters tooltip instead; update `/assets/js/app.js::theme` with a new func to handle those (or just do more Bitters-esque stuff to spans if more appropriate). Update copy as needed if tooltips are a better context for highlighted buzzword.

* `@jeffeoff` - Need all of `/_includes/projects.html` built out; update `/assets/js/app.js` with Bitters modal stuffs.

* `@channel` - We _might_ already have yours -- but if not, write a 1 para bio for the `/team` page; give Jeff your current preferred avatar, GH + d.o. homepage, etc. so he can do something sweet with it all (e.g. Simpsons characters or something...don't really care).

* `@jeffeoff` - ^ process alla that in to something that makes us hip and rad and human-like and makes people want to come work with our rad group, or just hire us becaue we are so rad and `with it`. Also: audit everything ever because you are way more `in touch` than `@natemoo` is and you know what's actually cool these days.

* `@jasonsocha` - Apply seal-of-approval to above and CNAME the `sochadev.com` domain.
