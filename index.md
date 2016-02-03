---
title: <div>Hello, world. We are</div> Socha Dev
tags: [ web development, full-stack JavaScript, AngularJS, Node.js, Meteor, PHP, Phalcon, Drupal, front ]
---

<section class="stripe intro">
  <div class="container">
    <div class="alpha">
      <p>a
        <span class="gray tooltip" data-tip="White-label means that you can take
        credit for the work you hire us to do; we like staying behind the scenes.">white-label</span>
        web and app development shop built to help your team succeed. We specialize in
        <a href="#overflow" class="blue">overflow</a>,
        <a href="#triage" class="red">triage</a> and
        <a href="#problem-solving" class="green">problem solving</a> services.
      </p>
      <hr>
      <p>Give us your strategy, designs, requirements, API docs or let us help create them.
      We turn it all into a beautiful, fully functioning application.</p>
    </div>
    <div class="beta">
      <img class="img-responsive hide-mobile" srcset="/assets/images/heroes/main-illust@2x.png" src="/assets/images/heroes/main-illust.png" />
    </div>
  </div>
</section>

<section class="stripe icon-stripe blue overflow">
  <div class="container">
    <div class="alpha hide-mobile"><span class="icon icon-tint icon-9x"></span></div>
    <div class="beta">
      <h2 id="overflow">Overflow</h2>
      <p>Sometimes you just have more work than you can handle. Sometimes a great contract comes along, but you're not sure if it warrants bringing on a new full-time developer. Socha Dev has you covered.</p>
    </div>
  </div>
</section>

<section class="stripe icon-stripe red triage">
  <div class="container">
    <div class="alpha">
      <h2 id="triage">Triage</h2>
      <p>Projects go off the rails. The freelancer or new developer you hired isn't working out, the project is due in two weeks, and it doesn't work. We will assess your situation and make it happen.</p>
    </div>
    <div class="beta hide-mobile"><span class="icon icon-ambulance icon-flip-horizontal icon-rotate-90 icon-7x"></span></div>
  </div>
</section>

<section class="stripe icon-stripe green problem-solving">
  <div class="container">
    <div class="alpha hide-mobile"><span class="icon icon-cog-alt icon-8x"></span></div>
    <div class="beta">
      <h2 id="problem-solving">Problem Solving</h2>
      <p>Making great projects happen can be a tricky business. Some projects are a slam dunk. Some require careful thinking and experienced engineering. Some projects have annoying bugs in them. Socha Dev will figure it out.</p>
    </div>
  </div>
</section>

<section class="stripe projects gray">
  <div class="container">
    <div class="fullwidth">
      <h2 id="projects">Projects</h2>
      <p>We build and develop on behalf of our partners &mdash; really well. Here are some highlights.</p>
      {% include projects.html %}
    </div>
  </div>
</section>

<section class="stripe contact-us darkgray">
  <div class="container fullblock">
    <div class="fullwidth">
      <h2 id="contact">Contact Us</h2>
      <p><a href="{{ page.url }}" class="blue form-toggler">Ready to get started?</a> We'd love to learn more about your project. If you need material for the boss or board: <a href="/executive-summary" target="_blank" class="red">here's an executive summary</a></p>
    </div>

    <div class="contact-form">
      <div class="form-container">
        {% include contact.html %}
      </div>
    </div>
  </div>
</section>

<section class="stripe darkgray team">
  <div class="container fullblock">
    <hr>
  </div>

  <div class="container team-about">
    <div class="alpha hide-mobile">
      <span class="icon icon-letter-a icon-12x"></span>
    </div>
    <div class="beta">
      <h3 id="about">Our Team</h3>
      <p><a href="/team" class="purple">Our team members</a> live and work across the US &mdash; connected with some neat apps in a <!--<a href="/" class="green">Our workflow</a>-->workflow designed to incorporate great ideas throughout a project's life cycle.</p>
      <p>We love it when a plan comes together.</p>
      <p>Want to work here? <a href="#contact" class="blue form-toggler">We'd love to talk!</a> (include your GitHub profile name)</p>      
    </div>
  </div>

  <div class="container fullblock">
    <hr>
  </div>
</section>
