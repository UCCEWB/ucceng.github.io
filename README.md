# Engineering Society | [uccewb.github.io](https://uccewb.github.io)
[![Build Status](https://travis-ci.org/UCCEWB/uccewb.github.io.svg?branch=master)](https://travis-ci.org/UCCEWB/uccewb.github.io) [![Version](https://img.shields.io/badge/version-3.0.0-brightgreen.svg)](https://github.com/UCCEWB/uccewb.github.io/releases/tag/v3.0.0) [![Gem](https://img.shields.io/badge/gem-v3.3.1-orange.svg)](https://github.com/UCCEWB/uccewb.github.io/) [![Slack](https://uccewb-slack.herokuapp.com/badge.svg)](https://uccewb.slack.com) 

## About
* Official website of Engineering Society

## News
If you would like something to be published in the `news` section of the website, please send the following information to Michael at [michael.bateman@ucc.on.ca](mailto:michael.bateman@ucc.on.ca):

1. Title
2. Content

## Development Notes
If you would like to help develop the website, please follow these instructions.
__Note:__ We currently do not support setup for non-unix machines (ex. Windows).

To setup your machine, you will need to install the following:
* [Git](https://git-scm.com), to clone the repository
* [Ruby](https://www.ruby-lang.org/en/), to build the site
* [Jekyll](https://jekyllrb.com), to build and run the website

We will assume you're using a Mac, as Ruby comes pre-installed.

Follow the following instructions, exactly:

[Download Git](https://git-scm.com/download/)

* Clone the repository.  You can do this by typing:
```bash
$ git clone https://github.com/UCCEWB/uccewb.github.io.git
```
* Enter the directory by typing:
```bash
$ cd uccewb.github.io
```
* If you do not have Jekyll installed, you can install it by typing:
```bash
$ gem install jekyll
```
* Run `./start.sh`

__Note:__ You may need to make `.sh` files executable.  You can do so by typing `chmod +x ./<file>.sh`.

Now you should be able to see the website by typing [http://localhost:4000](http://localhost:4000).

To stop the server, press `control` + `c`

If something is not working, please let us know in the [issue tracker](https://github.com/UCCEWB/uccewb.github.io/issues).
