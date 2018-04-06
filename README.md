# How To

Clone the repo and navigate to the docs folder. Start up the http server

```
python -m SimpleHTTPServer 8000
```

and navigate to http://localhost:8000/index.html to see the radar.

# Data

Data was gathered from the [tech survey] (https://github.com/ovotech/pe-tech-survey) and stored in csv for easy injesting.
[techList.py](techList.py) takes this csv files as input and transforms it to the 
quadrant definitions for the tech radar, then outputs it to 'output'. All data 
currently is set to the first ring. The lines from 'output' can then be copied 
to entries in [index.html] (index.html#63)

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
