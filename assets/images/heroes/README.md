_...because professional websites HAVE to have big, obnoxious hero images._

Hero images can be defined per page by adding these params to your Front Matter:

    heroImage: my-hero-image.jpg
    heroContent: <p>Hero copy goes here.</p>

The file's base name will also be applied as a CSS class in the `default.html` layout on the `.stripe.hero` element. Custom SASS per hero should be added to `/assets/sass/components/_heroes.scss`.

Homepage hero support should be added directly to the `/index.md` markup.

Any images added here should be public domain (even if you "rebooted" them); here's some good resources:

* https://en.wikipedia.org/wiki/Wikipedia:Public_domain_image_resources
