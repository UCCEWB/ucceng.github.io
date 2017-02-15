# Engineering Society | [uccewb.github.io](https://uccewb.github.io)
[![Build Status](https://travis-ci.org/UCCEWB/uccewb.github.io.svg?branch=master)](https://travis-ci.org/UCCEWB/uccewb.github.io) [![Version](https://img.shields.io/badge/version-3.0.0-brightgreen.svg)](https://github.com/UCCEWB/uccewb.github.io/releases/tag/v3.0.0) [![Gem](https://img.shields.io/badge/gem-v3.3.1-orange.svg)](https://github.com/UCCEWB/uccewb.github.io/) [![Slack](https://uccewb-slack.herokuapp.com/badge.svg)](https://uccewb.slack.com) 

## About

This is the website of the Engineering Society club.  This site contains everything from our daily news to links to the Engineers Without Borders website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

__Note:__ *This guide assumes your on a Unix machine*

### Prerequisites

To run our website you will need the following things:

1. [Git](https://git-scm.com)
2. [Ruby](https://rubygems.org)
3. [Jekyll](https://jekyllrb.com)

Below, shows how to install each of these.

### Installation

Please follow these instructions exactly so you don't run into any errors.

#### Git

All modern Mac's come with Git preinstalled.  If you're using an older Mac or you do not have Git installed, please follow instructions on their website (https://git-scm.com).  You will need Git to clone the repository.

#### Ruby

Ruby also comes preinstalled on modern Mac's!  If you do not have it, please follow instructions on their website (https://rubygems.org).  You will need Ruby to install Jekyll.

#### Jekyll

Jekyll is a static site generator that is needed to build and run the website.  We will install Jekyll using Ruby.  Unfortunately, Jekyll is not preinstalled on Mac's, but it is very simple to setup.

__Note:__ *The `$` is to remind that this is the command line.  When entering prompts, you do not include the `$`.*

* Open `Terminal.app` to access the command line.  You should see something like this:
```bash
Last login: Tue Feb 14 16:39:48 on ttys000
Michaels-MacBook-Pro-Retina:~ michaelbateman$ 
```
* Now, install Jekyll by typing:
```bash
$ gem install jekyll
```
Jekyll is now all installed!

#### Clone

Now, we need to use Git to clone our repository.

* Clone the repository with HTTPS
```bash
$ git clone https://github.com/UCCEWB/uccewb.github.io
```
* Navigate into the directory by typing:
```bash
$ cd uccewb.github.io/
```
* Now to start the website, type:
```bash
$ jekyll serve
```
Once the website is being served, you should see something like this:
```
Configuration file: /Users/michaelbateman/Documents/uccewb-website/_config.yml
Configuration file: /Users/michaelbateman/Documents/uccewb-website/_config.yml
            Source: /Users/michaelbateman/Documents/uccewb-website
       Destination: /Users/michaelbateman/Documents/uccewb-website/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.76 seconds.
 Auto-regeneration: enabled for '/Users/michaelbateman/Documents/uccewb-website'
Configuration file: /Users/michaelbateman/Documents/uccewb-website/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```
You should now be able to access the site by going to http://localhost:4000

By default, Jekyll will serve the website on port 4000 which can get annoying if you are working on multiple projects and want to serve them all at the same time.  You can type the following to serve it on another port:
```bash
$ jekyll serve --port 80
```
__Note:__ *If you select port 80, you do not need to type in the port number, so instead you type `http://localhost/`.*

If the following message appears when trying to bind on a different port, you will need to use the `sudo` command.
```
jekyll 3.3.1 | Error:  Permission denied - bind(2) for 127.0.0.1:80
```
You now need to type:
```bash
$ sudo jekyll serve --port 80
```

## Built With

* [Sublime Text](https://www.sublimetext.com) - The text editor
* [Bootstrap](http://getbootstrap.com) - The CSS framework

## Contributing

*Coming soon...*

## Authors

* __Michael Bateman__ - [GitHub](https://github.com/michael-bateman/)
* __Simon Zirui Guo__ - [GitHub](https://github.com/simonguozirui)

See the list of [contributors](https://github.com/UCCEWB/uccewb.github.io/contributors) who helped in this project.

## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for more details.

## Acknowledgments

* [README.md template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - [PurpleBooth](https://github.com/PurpleBooth)
