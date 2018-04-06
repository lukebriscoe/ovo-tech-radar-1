def removeChar(t, ch, li):
  sp = t.split(ch)
  li[sp[0].lstrip().rstrip()] = True
  li[sp[len(sp)-1].lstrip().rstrip()] = True


file = open('survey results.csv')
file.readline()
tech = {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}}

#titles transforms the columns from the tech survey (in comments) to quadrants 
#in the tech radar 0 - Hosting, 1 - Infrastructure, 2 - Framworks, 3 - Data Management
titles = {'0': '0', #infrastructure
  '1': '1', #CI/CD
  '2': '2', #logging
  '3': '2', #monitoring
  '4': '1', #infrastructure provisioning
  '5': '2', #caching
  '6': '3', #datastore
  '7': '1', #packaging
  '8': '2' #load balancing
  }
for line in file:
  line = line.strip().split(',')
  counter = 0
  for column in line:
    items = column.split("|")
    for item in items:
      item = item.lstrip().rstrip().lower()
      if item not in tech[str(counter)]:
        tech[str(counter)][item] = True
    counter += 1

file = open('output', 'w')
for t in tech:
  for i in tech[t]:
    if i is not "none":
      file.write(" {quadrant: "+titles[t]+",ring: 0,label: \""+i+"\",active: false,moved: 0},\n")