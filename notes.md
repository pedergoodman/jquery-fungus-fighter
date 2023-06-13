# GOALS

Kill the Freaky Fungus.

## Click Events

**When an attack button is clicked**
- update state variables
    - may be in one or more variables
- Freaky Fungus loses HP when attacked
- Attack Points reduced when attacking
    - values in readme
- HP and AP values may not be negative
    - set to zero otherwise

## State Changes

**What are we changing?**
- Text above AP
- Text above HP
- Animation state changes
    - If HP == 0, walk => dead
    - if AP == 0, walk => jump
    - if AP == 0, add a 'disabled' attribute
        - (check readme)


## Stretch Goals
- update the value of the progress element
    - this is the 'health bar' 
    - linked to whatever the text above HP and AP
- if HP falls below 50, regenerate 1 HP every second
    - while loop?


## TODO

**Variables needed**
- Attacks 
    - array of objects
    - { attackName: {ap cost: --, hpDamage: --}}
- AP total
- HP total


**functions**
- 4x attack even handlers
    - updates AP & HP points 
        - values cannot go negative
        - pass to hp/ap dead state if == 0 
    - passes to render
- If HP or AP hits 0
    - fungus animation changes
    - & buttons disable



**Checklist**
- [x] link First Attack Button to click event
- [x] create event handler for attack
- [x] create variables for HP, AP, and Attacks



// flow, what needs to happen?
1. button clicks
2. attack properties grabbed
3. new HP & AP calculated
4. check for conditions
    - HP <= 0? => animation
    - AP <= 0? => animation and button disable
5. update DOM
    - HP text
    - AP text