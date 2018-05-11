# How To

Clone the repo and navigate to the docs folder. Start up the http server

```
python -m SimpleHTTPServer 8000
```

and navigate to http://localhost:8000/index.html to see the radar.

# Data
The data was initially gathered from the [tech survey](https://github.com/ovotech/pe-tech-survey), transformed into JSON and stored in the data.js file. Any further changes to the data should be made manually in that file.

---

# OVO Tech Radar
The OVO Tech Radar is a living document that exists to make visible the risks
and rewards involved with the existent and nascent technologies we are using
across the OVO Group.  It is a list of technologies assigned in to four rings,
with the following semantics:

### Adopt
Technologies we have high confidence in to serve our purpose, also in large
scale.  Technologies with a usage culture in our OVO production environment, low
risk and recommended to be widely used.

### Trial
Technologies that we have seen work with success in project work to solve a real
problem; first serious usage experience that confirm benefits and can uncover
limitations.  These technologies are slightly more risky; some engineers in our
organisation have used them before and will share knowledge and experiences.

### Assess
Technologies that are promising and have clear potential value-add for us;
technologies worth investing research and proof of concenpt efforts in to see if
they may add value.  These technologies have higher risks; they are often brand
new and highly unproven in our organisation.  You will find some engineers that
have knowledge in the technology and promote it, you may even find teams that
have started a proof of concept effort.

### Hold
Technologies not recommended to be used for new projects.  Technologies that we
think are not (yet) worth to (further) invest in.  They technologies should not
be used for new projects, but usually can be continued for existing projects.

---

## License

```
The MIT License (MIT)

Copyright (c) 2017 Zalando SE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
