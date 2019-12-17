# Your First Skill
Ready to create your first Skill? See how easy it is to get a new Skill up and
running, then we will step through the basic anatomy of a Alice Skill.

::: warning
This describes functions that are not fully implemented yet
- the talk directory has a different structure right now, but will be changed to the one described here
:::

## Prerequisites

If you haven't already, check out our [Introduction to Skill Development](./). This walk through assumes you:

* Know some basic knowledge of [Python programming](https://www.python.org/),
* have an account on [Github.com](https://github.com), and
* have a working version of ProjectAlice.

## Understand the flow of your Skill

It's a good idea to start by writing down how your Skill will work, including

* What words will the User speak to activate the Skill?
* What will Alice speak in response?
* What data will you need to deliver the Skill?
* Will you need any additional packages or dependencies?

Once you've given these some thought, you can get started.

## Alice Skill Kit (alice-sk)

::: danger
TODO: add description how it is created with skill kit
:::

## Structure of a Skill

If we now navigate to our new Skill, we can see that it created the following structure

```text
.
├─ dialogTemplate
│  └─ en.json
├─ talks
│  └─ en
│     └─ talk.json
├─ HelloWorldSkill.install
├─ HelloWorldSkill.py
└─ README.md
```

We will look at each of these in turn.

### `dialogTemplate` and `talks` directories

The `dialogTemplate` and `talks` directories contains a json file for each spoken language the skill supports. The files are named using the [ISO639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language. For example, German is 'de', and English is 'en'.

By default, your new Skill contains only a file for English - 'en'. If more languages were supported, then there would be additional language files.


### `talks` Directory

The `talks` directories contains a subdirectory for each spoken language the skill supports. The subdirectories are named using the [ISO639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language. For example, German is 'de', and English is 'en'.

There will be a subdirectory for each language you selected when creating the Skill using the Skill Kit.

Each of these subdirectories can include two files. The first one is called `talk.json` and the second one `engine.py`.
The `engine.py` is intended for more complex use cases where a simple string is not enough for the answer and is not created by default. Thats why we will only describe how to create the `talk.json` file here, while more informations on the topic can be found in the chapter [Talks]().


The File created by the Skill Kit does only contain some dummy answers that show the structure of the file:
```json
{
	"dummy": [
        "example sentence",
        "another example sentence"
    ]
}
```

When instructed to use a particular dialog, Alice will choose one of these sentences at random. This is closer to natural speech. That is, many similar phrases mean the same thing.


### `dialogTemplate` Directory

Each Skill defines one or more Intents. Intents are defined in the `dialogTemplate` directory. The `dialogTemplate` directory is organized by language aswell, however there is just one json file for each language like `en.json` for english.

We will learn about Intents in more detail shortly.


### HelloWorldSkill.py

The `HelloWorldSkill.py` file is where most of the Skill is defined using Python code. We will learn more about the contents of this file in the next section.

Let's take a look:

#### Importing libraries

```python
from core.base.model.AliceSkill import AliceSkill
from core.dialog.model.DialogSession import DialogSession
from core.util.Decorators import IntentHandler
```

This section of code imports the required _libraries_. Some libraries will be required on every Skill, and your skill may need to import additional libraries.

#### Class definition

The `class` definition extends the `AliceSkill` class:

```python
class HelloWorldSkill(AliceSkill):
```

The class should be named logically, for example "TimeSkill", "WeatherSkill", "NewsSkill", "IPaddressSkill". If you would like guidance on what to call your Skill, please join the [~skills Channel on our Discord chat]().

Inside the class, methods are then defined.

#### \_\_init\_\_\(\)

This method is the _constructor_. It is called when the Skill is first constructed. It is often used to declare state variables or perform setup actions. You don't have to include the constructor.

An example `__init__` method might be:

```python
def __init__(self):
    super().__init__()
    self._offline = True
```

#### Intent handlers

Previously the `__init__` function was used to register intents, however our new `@IntentHandler` decorator is a cleaner way to achieve this.
In our current HelloWorldSkill this could be implemented in the following way

```python
@IntentHandler('HelloWorldIntent')
def helloWorldIntent(self, session: DialogSession):
    self.endDialog(session.sessionId, self.randomTalk(text='helloWorld'))
```

The function receives two _parameters_:

* `self` - a reference to the HelloWorldSkill object itself
* `session` - an `DialogSession` object, that includes informations like the `slots` an intent was called with

The intent handler then calls the `self.endDialog()` method passing the session to end and the answer to say. In this case the type of the answer is `helloWorld`


### HelloWorldSkill.install

This file defines what is required to get the skill up and running. It includes parameters like the `version number`, a `description` and `supported languages`.


### README.md

The README file contains human readable information about your Skill.


## What have we learned

You have now successfully created a new Skill and have an understanding of the basic components that make up an Alice Skill. Next we will dive into each component in more detail.