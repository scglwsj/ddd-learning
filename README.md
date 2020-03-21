## Description

learn DDD by parking in multiple languages

## Model

now I have two context: parking and config

parking is the core context and config is a supporting context.

there is the parking's modeling:

![avatar](out/design/class/parking%20context.png)

and ther is the config's modeling:

![avatar](out/design/class/config%20context.png)

in the bussiness `park`, there is the sequence

![avatar](out/design/sequence/park.png)

in the bussiness `create parking manager`, there is the sequence

![avatar](out/design/sequence/create%20parking%20manager.png)

`ps: in those sequence,diffrent colour in diffrent layer:`

<font color=LightCoral>light coral in external user</font>

<font color=LightBlue>light blue in application service</font>

<font color=LightGreen>light green in domain</font>

<font color=LightYellow>light yellow in adapter</font>

<font color=LightGray>light gray in external system</font>


## TypeScript

see in the folder ts

## Kotlin

see in  the folder kt

## CSharp

see in the folder cs
