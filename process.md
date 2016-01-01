---
title: Our process
description: An overview of the software development life cycle here at Socha Dev.
heroImage: bubbles.jpg
heroContent: <p>"I'm definitely interested, but how does this all work day-to-day to get my project done right, and done on time?"</p>
tags: [ workflow ]
---

{% assign project = '**Bubble Maker 9000&trade;**{: .tooltip .green .project }{: data-tip="Sure, it makes bubbles. But the key to real, lasting success is its Rainbow Cannon and built-in Unicorn Rider&trade; integration." }' %}
{% assign projectDue = 'now' | date: "%B" | plus: 3 | prepend: "2015-" | append: "-01" | date: "%B" %}
{% assign actor1 = '**![Chief Caroline](/assets/images/socha-dev.png){: .avatar .logo }Chief Caroline**{: .tooltip .red .actor .actor-1 }{: data-tip="Caroline is a real go-getter, and really needs good news to send up the corporate food chain AT ALL TIMES." }' %}
{% assign actor2 = '**![Marvin Manager](/assets/images/socha-dev.png){: .avatar .logo }Marvin Manager**{: .tooltip .orange .actor .actor-2 }{: data-tip="Marvin does his best to keep his team moving, but is lately feeling a ton of pressure from the top." }' %}
{% assign actor3 = '**![Developer Dave](/assets/images/socha-dev.png){: .avatar .logo }Developer Dave**{: .tooltip .orange .actor .actor-3 }{: data-tip="Poor Dave has more work than he can handle, pretty much all the time." }' %}
{% assign actor4 = '**![Socha Dev](/assets/images/socha-dev.png){: .logo }Jason @ ' | append: site.title | append: '**{: .tooltip .orange .actor .actor-4 }{: data-tip="TODO" }' %}
{% assign actor5 = '**![Socha Dev](/assets/images/socha-dev.png){: .logo }Martyn @ ' | append: site.title | append: '**{: .tooltip .orange .actor .actor-5 }{: data-tip="TODO" }' %}

We made this awesome comic to illustrate how we are typically brought on to a
project, how we interact with your team during development, and how that project
becomes an all-around success. We proudly present...
_<span class="issue">
  <span class="numbers">
    <span class="price">10&cent;</span>
    <span class="date"><span class="number">#135</span>{{ 'now' | date: "%m-%Y" }}</span>
  </span>
  <span class="publisher"></span>
 </span>
 <span class="title green">The Tale Of The<br>{{ project }}<span class="authority"></span></span>_{: .comic-banner }

1. _Our sensational saga begins at the weekly Steering Committee meeting, nestled
  somewhere in the dark gloom of Conference Room 2..._{: .narrator }
  ![Illustration](http://placehold.it/284x150/e4e4e4/bbbbbb){: .illustration .bottom }
1. {{ actor1 }} We ABSOLUTELY MUST complete the {{ project }} project by {{ projectDue }}!!
  It is critical that our stakeholders have their bubbles!!
  * {{ actor2 }} Yeah, I'm gonna have to look at scheduling with the team -- let's
  meet again next week?
    _...sheeeit, there's no way we can complete the {{ project }} in 2 months!!
    What is she thinking, especially with this hiring freeze?!_{: .purple }
1. ![Illustration](http://placehold.it/284x100/e4e4e4/bbbbbb){: .illustration .top }
  {{ actor3 }} Is she serious, Marv?? _I'm freaking out right now._{: .purple }
  Like, seriously -- the {{ project }} is a massively complex system! I know we
  can't hire anybody new right now, but I did talk to this awesome dev crew called
  " **{{ site.title }}**{: .brand } " at a meetup last week...
1. {{ actor2 }} _beep boop [phone](tel:{{ site.contact.phone }}){: .blue } or
  beep boop [contact form](/#contact){: .blue } beep boop_{: .purple }
  Hi, I'm hoping to talk to someone smart about our current needs on the
  {{ project }} system -- we're in deep poo right now. {{ actor3 }}{: .no-img } recommended
  I talk to you.
  * {{ actor4 }} Great, pleasure to meet you {{ actor2 }}{: .no-img }! We are all
  SUPER smart -- how can we help you get out of this deep poo that you're in?
1. _...an epic story of pressure and expectation unfolds, Jason works with
  [the team](/team){: .green } afterwards to create a bang-up plan, SOW for
  development of the {{ project }} system is prepared and delivered..._{: .narrator }
  ![Illustration](http://placehold.it/284x150/e4e4e4/bbbbbb){: .illustration .bottom }
1. {{ actor2 }} Awesome, thanks Jason! We'll get back to you ASAP. _Wow, I can't
  believe the level of technical detail in this doc -- these ideas on the
  Unicorn Rider&trade; integration are fantastic! And this
  [executive summary](/executive-summary){: .red } is exactly what {{ actor1 }}{: .no-img }
  is gonna want to see!_{: .purple }
      * {{ actor3 }} Holy shiz, Marv! This is really great stuff -- please, please
      can you get {{ actor1 }}{: .no-img } to meet with **{{ site.title }}**{: .brand }??
1. {{ actor1 }} This all sounds great {{ actor2 }}{: .no-img } -- whatever it takes to get
  the {{ project }} done by {{ projectDue }}. Bring this " **{{ site.title }}**{: .brand } "
  group in and let's listen to their ideas some more.
  ![Illustration](http://placehold.it/284x150/e4e4e4/bbbbbb){: .illustration .bottom }
1. _...meet-and-greet and brainstorming sessions follow, **{{ site.title }}**{: .brand }
  charms all involved with their practical can-do and down-to-earth manner. The
  proposed UX for the Rainbow Cannon in particular was a big hit..._{: .narrator }
![Illustration](http://placehold.it/284x150/e4e4e4/bbbbbb){: .illustration .bottom }
1. {{ actor1 }} I feel very confident in **{{ site.title }}**{: .brand } and
  I'm signing off on this. Now let's get the{{ project }} launched, {{ actor2 }}{: .no-img }!
  * {{ actor3 }} _I knew I was right about these guys! Back to doing the 1,000,000
    other things I have to do now..._{: .purple }
1. ![Illustration](http://placehold.it/284x244/e4e4e4/bbbbbb){: .illustration .top }
  {{ actor5 }} Hi Marvin, looking forward to working with you! I
  know we just got sign-off from {{ actor1 }}{: .no-img } but I wanted to reach out with...
1. _...A FEW KICKOFF ITEMS!!!_
  * **Slack**{: .purple } invites were sent to you and {{ actor3 }}{: .no-img }
  -- IM us at any time there. I or one of the developers on the {{ project }}
  project will always respond within minutes.
  * We also sent you both invites to our internal tracking system -- you'll see
  that all deliverables in the SOW have already been added there. We use this
  system to indicate each item's progress and testing status.
  * We like doing weekly **Google Hangouts**{: .blue } or calls with
  you to talk through any questions that may come up. Is there a good, regular
  time slot for you?
      {: .bullets }
1. {{ actor2 }} Shiz Martyn, my mind is blown!! **{{ site.title }}**{: .brand }
  is really on top of this!
    * {{ actor3 }} For realsies, this is great -- this won't be a drain on my own time at all!
    ![Illustration](http://placehold.it/284x205/e4e4e4/bbbbbb){: .illustration }
1. TODO
1. TODO
1. TODO
1. TODO
1. TODO
1. TODO
{: .container .comic }
