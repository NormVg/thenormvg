
<p align="center" id="cen-img">
  <img src="/banner.png" alt="KrakenEditor">
</p>

## How Kraken Started

It all started when I was experimenting with **Cursor Editor** during the first few weeks of Alpha. It made me realize how small details can have a massive impact on the overall experience. It got me thinking: why do most editors focus so heavily on adding features but completely neglect the user interface?

That question set off a chain reaction. I wanted to create an editor that felt good to use, not just one that worked. So, I started building Kraken in Figma, focusing on designing a clean, distraction-free layout. At first, it wasn’t about competing with other editors—it was just about crafting something simple, clean, and functional.

---

## Features That Matter  

Here’s what Kraken offers right now:  

- **Code Editor**: Clean and distraction-free.  
- **Integrated Terminal**: No need to keep switching windows.  
- **Focus Bar**: A minimal bar at the bottom for quick actions.  
- **Side Space**: 30% width dedicated to tools without stealing space from your code.  
- **Web Apps Integration**: Bring YouTube, GitHub, or Spotify into your editor.  

Coming Soon:  
- **Settings**  
- **Command Palette**  
- **AI Integration with Ollama**  

Kraken is still a work in progress, but the vision is clear: it’s about creating a tool that works *for you,* not just *with you.*  

---

<p align="center" id="cen-img">
  <img src="/kraken.gif"  alt="KrakenEditor">
</p>

---
## Why Kraken?  

*"Why build another code editor? There are plenty of them already!"*

Let’s be real: VS Code is great. It’s free, packed with features, and gets the job done. But after a while, all editors start to feel the same. They look the same, work the same, and lack any real personality. It’s like the industry hit copy-paste on every code editor out there.  

I’ll be honest: Kraken started out as a random Figma mockup. I wasn’t trying to build “the next big thing” or compete with established editors. I just wanted to create something that looked clean and worked without distractions—a code editor that feels right.

Over time, the idea grew into something more serious. I started questioning why most editors prioritize features over the user interface. Everything felt cluttered, like features were just shoved in wherever there was space.

Kraken is different. It’s not about cramming in features; it’s about finding the right balance between usability and aesthetics. It’s lightweight, modular, and focused on making coding enjoyable again. The goal is to create an editor that doesn’t overwhelm you with endless options but makes coding feel intuitive and natural.

I’m not trying to reinvent the wheel, just trying to make a code editor that actually *works*—one that isn’t just another cookie-cutter clone of everything else out there. Kraken is here because I believe it’s time for a fresh take on how a code editor should feel and function.

---



## The Design Philosophy

Kraken’s design wasn’t born in isolation. It’s heavily influenced by my experience switching to Linux. I hopped through distros like Ubuntu, Mint, and EndeavourOS before finally settling on EndeavourOS with Hyperland. That journey introduced me to new UI concepts that became the foundation of Kraken.  

### Inspirations Behind Kraken:  

1. **Hyperland**  
   If you’ve used Hyperland, you know how clean and modular it feels. It’s like the perfect workspace setup, and that same vibe inspired Kraken’s layout and customization.  

2. **Neovim and Tmux**  
   I love how Neovim and Tmux keep things minimal yet powerful. They taught me that simplicity doesn’t mean sacrificing functionality. Kraken’s keyboard controls and interface take a lot of cues from them.  

3. **A Modular Approach**  
   The side space, focus bar, and integrated tools are all about keeping things accessible without getting in the way. You don’t need a million features in your face—just the ones you actually use.  

---

## Why People Are Loving Kraken

### Few Posts
   - [Twitter / X](https://x.com/TheNormVg/status/1797848332028739651?t=65cdOZc0GZyv4mROCAIRVw&s=08)
   - [Reddit](https://www.reddit.com/r/developersIndia/s/MGeFQSBkLA)
   - [Youtube](https://youtu.be/RkgkyFuXS_M?si=J_H0iItTVMnQU5Z7)

Here’s the best part: people actually like Kraken! It’s been getting some traction on places like **Reddit**, **Twitter**, and even **Discord**. It’s super motivating to see people appreciate the work I’ve put into it.

I’m honestly just getting started. Kraken’s still in active development, but the feedback so far has been amazing. It’s definitely not perfect, but that’s the beauty of it. I’m constantly improving it, making it better, and I’m super excited to see where it goes.




## The Journey of Building Kraken (Spoiler: I Struggled)

Now, this is where things get interesting—and a bit messy. I started Kraken in **React** and **Electron**. Sounds good, right? Well, it wasn’t. React and Electron just didn’t vibe together for a code editor, and I kept running into a ton of issues. It was like a big pile of dependencies and DLL issues that I couldn’t quite sort out. Honestly, I felt like I was just blindly hitting things with a hammer until they worked (and they didn't).

But then, I learned **Vue**. Oh man, once I started playing around with it, I was *hooked*. It was like a breath of fresh air. Everything was faster, simpler, and I actually understood what was going on. So, I switched to Vue 100%—no looking back.

In about a week, I had ported Kraken to Vue + Electron, and everything just *clicked*. The project was running smoother, and I added a bunch of features that weren’t even in the original React version. It felt so much faster and cleaner.



## Monaco, CodeMirror, and the Journey to Kraken’s Perfect Fit

So, originally, I wanted to use **Monaco Editor** for Kraken, but... *it didn't work*. Yeah, I spent a good 2 months trying to make it work in Electron, reaching out to people way better than me (shoutout to all the devs who helped me out). But nope, we just couldn’t get it working.

I almost gave up. Almost.

But then, I had a moment of inspiration. After a while, I finally figured out how to make Monaco work, and the feeling? Unreal. I felt like a superhero. I shared the solution with everyone who had tried to help me, and we all celebrated like crazy.

I did another big refactor, added Monaco to Kraken, and everything was working fine... until I realized Monaco wasn’t as fast as I hoped it would be. So, I made the call to switch back to **CodeMirror**—and honestly? I loved it.

Even though I went through a lot of frustration and late-night coding sessions, the experience was *worth it*. I learned so much, and I’m still enjoying the journey.


## What’s Next?  

There’s still so much to do. Kraken isn’t perfect, but that’s the fun of it—it’s evolving every day. Features like a command palette, seamless AI integration, and custom settings are in the works.  

This isn’t just a project for me; it’s an experiment in rethinking how we interact with code. I’m open to feedback, contributions, and even wild feature requests.  

---

## Let’s Build This Together  

Kraken isn’t here to compete with anyone. It’s here because coding should feel exciting again. If you’re tired of the same old editors and want to try something different, give Kraken a shot.  

Check out the repo on [GitHub](https://github.com/NormVg/kraken), and hit me up on [Twitter](https://x.com/TheNormVg) with your thoughts or ideas.  

Let’s make something cool—together.  

---  

## Wrapping It Up

So yeah, that’s the story behind Kraken. It’s been a wild ride, and I’m stoked about what’s next. Kraken is my attempt at making coding more enjoyable. It’s fast, it’s clean, and it actually lets you focus on what you’re doing.

If you want to give it a try, you can check out the repo on GitHub. Feel free to contribute or just leave feedback—I’d love to hear what you think!

Thanks for reading, and I’ll see you in the next one!

---