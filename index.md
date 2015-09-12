---
title: Hello, world. We are Socha Dev.
tags: web development, full-stack JavaScript, AngularJS, Node.js, Meteor, PHP, Phalcon, Drupal
---

<div class="stripe">
  <div class="container">
    <div class="columns-12">
      <p>Socha Dev is a white-label web development team built to help your company
      succeed. We specialize in <a href="#overflow" class="blue">overflow</a>,
      <a href="#triage" class="red">triage</a> and <a href="#problem-solving" class="green">problem solving</a>
      services. We invite you to learn more about our <a href="#projects">past projects</a>
      or to <a href="#contact">contact us</a> to discuss your needs.</p>
      <hr>
      <p>We work in the development phase of web apps & sites, primarily using
      PHP frameworks, Drupal and a slew of front-end tools, completing projects
      end-to-end. We also provide full-stack development expertise in JavaScript with
      special loves for Node.js & AngularJS, as well as general system administration,
      high-availability server architecture, and general maintenance.</p>
    </div>
  </div>
</div>
<div class="stripe blue">
  <div class="container">
    <div class="columns-12">
      <h2 id="overflow">Overflow</h2>
      <p>Sometimes you just have more work than you can handle. Sometimes a great
      contract comes along, but you're not sure if it warrants bringing on a new
      full-time developer. Socha Dev has you covered.</p>
    </div>
  </div>
</div>
<div class="stripe red">
  <div class="container">
    <div class="columns-12">
      <h2 id="triage">Triage</h2>
      <p>Projects go off the rails. The freelancer or new developer you hired isn't
      working out, the project is due in two weeks, and it doesn't work. We will
      assess your situation and make it happen.</p>
    </div>
  </div>
</div>
<div class="stripe green">
  <div class="container">
    <div class="columns-12">
      <h2 id="problem-solving">Problem Solving</h2>
      <p>Making great projects happen can be a tricky business. Some projects are a slam
      dunk; some projects require careful thinking and experienced engineering. Some
      projects have annoying bugs in them. Socha Dev will figure it out.</p>
    </div>
  </div>
</div>
<div class="stripe gray">
  <div class="container">
    <div class="columns-12">
      <h2 id="projects">Projects</h2>
      <p>We build; we build well. Here are some highlights. You can click 'em for more info.</p>
{% include projects.html %}
    </div>
  </div>
</div>
<div class="stripe last">
  <div class="container">
    <div class="columns-12">
      <h2 id="contact">Contact us</h2>
      <p>Looking for support on your next project?<br>We'd love to learn more about it.</p>
      <fieldset class="contact">
        <div class="messages"></div>
        <form action="{{ page.url }}" method="post">
          <p class="form-item"><label for="name">Name *</label><input type="text" id="name" name="name" placeholder="Name *" maxlength="255" required></p>
          <p class="form-item"><label for="email">Email *</label><input type="email" id="email" name="email" placeholder="Email *" maxlength="255" required></p>
          <p class="form-item"><label for="phone">Phone</label><input type="tel" id="phone" name="phone" placeholder="Phone" maxlength="255"></p>
          <p class="form-item"><label for="title">Title</label><input type="text" id="title" name="title" placeholder="Title" maxlength="255"></p>
          <p class="form-item"><label for="company">Company / Org</label><input type="text" id="company" name="company" placeholder="Company / Org" maxlength="255"></p>
          <p class="form-item">
            <label for="human">Human check *</label>
            <input type="text" id="human" name="human" required placeholder="Human check *" maxlength="6">
            <input type="hidden" id="human-valid" name="human_valid">
            <input type="hidden" id="human-valid-input1" name="human_valid_input1">
            <input type="hidden" id="human-valid-input2" name="human_valid_input2">
          </p>
          <p class="form-item"><label for="details">Project details *</label><textarea id="details" name="details" rows="5" required placeholder="Project details *"></textarea></p>
          <p class="form-item"><label for="submit">Submit</label><input type="submit" value="Send it"></p>
        </form>
      </fieldset>
    </div>
  </div>
</div>
