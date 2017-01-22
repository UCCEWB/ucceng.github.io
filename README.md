# Engineering Society
[uccewb.github.io](uccewb.github.io)

## About
* Official website of Engineering Society

## News
If you would like something to be published in the `news` section of the website, please send the following information to Michael at [michael.bateman@ucc.on.ca](mailto:michael.bateman@ucc.on.ca):

1. Title
2. Content

## Development Notes
If you would like to help develop the website, please follow these instructions.
__*Note:__ We currently do not support setup for non-unix machines (ex. Windows).*

To setup your machine, you will need to install the following:
* [Git](https://git-scm.com), to clone the repository
* [Ruby](https://www.ruby-lang.org/en/), to build the site
* [Jekyll](https://jekyllrb.com), to build and run the website

We will assume you're using a Mac, as Ruby comes pre-installed.

1. [Download Git](https://git-scm.com/download/)
2. Clone the repository
```bash
$ git clone https://github.com/UCCEWB/uccewb.github.io.git
```
3. Enter the directory
```bash
$ cd uccewb.github.io
```
4. If you do not have Jekyll installed do so by typing:
```bash
$ gem install jekyll
```
6. Run `./start.sh`
__*Note:__ You may need to make* `.sh` *files executable.  You can do so by typing* `chmod +x ./<file>.sh`.
6. Now you should be able to see the website by typing [http://localhost:4000](http://localhost:4000).

If something is not working, please let us know in the [issue tracker](https://github.com/UCCEWB/uccewb.github.io/issues).
