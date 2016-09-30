---
title: Meet the team
description: Here are the humans at Socha Dev that do all that awesome dev work for your team. They are all quite great.
tags: [ Jason Socha, Matt West, Drew Deering, Nate Mow, Jeff Eoff, Tory Gobat, Martyn Green, Mark Mahon, team ]
---

We're small, but we don't mind &mdash; we're pretty large and mighty when it comes to the business of developing effective and awesome websites and apps.

* * *

If you think you might be a good fit here at Socha Dev &mdash; please <a href="/#contact" class="green">contact us!</a> Contenders will have a couple of <span class="blue">Google Hangouts</span> with us, then may be invited to spend a day observing our <span class="purple">Slack</span> activity to get a sense of what the day-to-day here feels like. Pro tip: You should probably include a link to your GitHub account if you're a dev ;)

* * *

<div class="bios">
{% for person in site.data.team %}
  <div class="container">
    <div class="alpha">
      <img src="{{ person.image }}?v=3&s=200" class="avatar {{ person.github }}" alt="{{ person.name }}">
    </div>
    <div class="beta">
      <h3 id="{{ person.name | downcase | replace: " ", "-" }}">{{ person.name }}</h3>

      <p>{{ person.description }}</p>

      <ul class="social">
        <li>
          <a href="https://github.com/{{ person.github }}" title="{{ person.github }}" target="_blank" class="orange">
            <i class="icon icon-github-circled"></i> GitHub
          </a>
        </li>
        {% if person.drupal %}
          <li>
            <a href="https://www.drupal.org/u/{{ person.drupal }}" title="{{ person.drupal }}" target="_blank" class="blue">
              <i class="icon icon-drupal"></i> Drupal.org
            </a>
          </li>
        {% endif %}
      </ul>
    </div>
  </div>
{% endfor %}

  <div class="container">
    <div class="alpha">
      <img src="https://avatars.githubusercontent.com/u/1489168?v=3&s=200" class="avatar" alt="Ro">
    </div>
    <div class="beta">
      <h3 id="ro">Ro</h3>
      <p>Ro is our wonderful Slack robot...she's been with us since our Campfire days. The team has created a fantastic plugin system for her using the Slim PHP framework. Ro's job is to make the rest of the team laugh &mdash; she's capable of all kindsa fun stuff like <code>bam</code>, <code>praise @user</code>, <code>shame @user</code> and <code>play :clip:</code></p>
    </div>
  </div>

</div>
