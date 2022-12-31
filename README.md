# Teyvat Memo

#### Simple & clean plan-maker for your teyvat friends

User register/login front-end structure set, will build a server with node.js

#### Dashboard

1. link each plan to a single detail page

- data needed decided in two parts: selected item name, plan details (data inherited from AllItem page)& basic data (data acquired from API with name)
- so the problem is to figure out how to inherit the data through Link, which by now I only know how to use useParams to get an id (but is id a good way to identify items? nor name, as one name can be for both farm and save)

- calculate the primo/material needed
  - primo: use 80-160 to estimate
  - material: useGetCharaQuery()
- edit plan
  - similar method as in addItem
- show the status data bottom left, calculation right, character top left
- back to all-items page at the top

2. if name&plan pair is in itemList, edit instead of add

   - this condition is applied in addItem and in single plan detail page

3. click Logo to go back to Stats
