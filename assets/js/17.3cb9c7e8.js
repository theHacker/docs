(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{226:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("p",[t._v("To track events and data within your skill we can use logging. If you are new to programming, this is a way to output a message that can tell you the state of your skill at a particular point in time, details about an error that has occurred, or simply noting that a program reached a particular point in the code.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Logging is useful during skill development, as well as to help end-users\ndiagnose problems in the future.")])]),t._v(" "),a("h2",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic Usage")]),t._v(" "),a("p",[t._v("A logger is available through the "),a("code",[t._v("AliceSkill")]),t._v(" base class. This means that you can use it within a skill without needing to import the "),a("code",[t._v("logging")]),t._v(" package.")]),t._v(" "),a("p",[t._v("Here is a quick example of an "),a("code",[t._v("info")]),t._v(" level message used in a skill. We will learn more about different levels shortly.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AliceSkill "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AliceSkill\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DialogSession "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DialogSession\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Decorators "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IntentHandler\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldskill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AliceSkill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\n\t"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorldIntent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorldIntent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("_kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n\t\t\tskills can log useful information.\n\t\t\tThese will appear in the Web Interface and the logs file.\n\t\t"""')]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an info level log message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"logging-levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-levels"}},[t._v("#")]),t._v(" Logging Levels")]),t._v(" "),a("p",[t._v("There are five types of log messages available that are used for different purposes.")]),t._v(" "),a("h3",{attrs:{id:"debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" Debug")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logDebug\n")])])]),a("p",[t._v("Debug messages are used for information that will help to diagnose problems. These are particularly useful if there is anything that has the potential to break in the future.")]),t._v(" "),a("h3",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" Info")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logInfo\n")])])]),a("p",[t._v("Info messages provide general information when the skill is running as expected. These messages will always be logged so are useful when actively developing a skill, but should be used sparingly once a skill is published for other people to use.")]),t._v(" "),a("h3",{attrs:{id:"warning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warning"}},[t._v("#")]),t._v(" Warning")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logWarning\n")])])]),a("p",[t._v("Warning messages are used to indicate that something has gone wrong, but the skill will continue to function.\nIt is possible to output a stack trace when needed using:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logWarning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" printStack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h3",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logError\n")])])]),a("p",[t._v("Error messages indicate that a serious problem has occurred and the skill will not be able to function.\nThey will always output a stack trace.")]),t._v(" "),a("h3",{attrs:{id:"critical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#critical"}},[t._v("#")]),t._v(" Critical")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logCritical\n")])])]),a("p",[t._v("Critical error messages indicate that a very serious problem has occurred and the skill will not be able to function.\nThey will always output a stack trace.")]),t._v(" "),a("h3",{attrs:{id:"fatal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal"}},[t._v("#")]),t._v(" Fatal")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logFatal\n")])])]),a("p",[a("code",[t._v("logFatal")]),t._v(" has the same outcome as "),a("code",[t._v("logCritical")]),t._v(", but indicates, that Alice will exit afterwards. This is why in skills you\nshould only use "),a("code",[t._v("logCritical")]),t._v(" even though they do the same.")]),t._v(" "),a("h2",{attrs:{id:"where-do-these-messages-get-logged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-do-these-messages-get-logged"}},[t._v("#")]),t._v(" Where do these messages get logged?")]),t._v(" "),a("p",[t._v("Log messages from a skill are displayed in the ProjectAlice Web Interface so that a User can see in real-time what is happening in the skill. They are also written to the "),a("code",[t._v("logs")]),t._v(" file located at: "),a("code",[t._v("~/ProjectAlice/var/logs")])]),t._v(" "),a("h2",{attrs:{id:"using-the-logger-outside-the-skill-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-logger-outside-the-skill-class"}},[t._v("#")]),t._v(" Using the logger outside the skill class")]),t._v(" "),a("p",[t._v("As the logger is provided by the skill class, it is only available within that scope. If you need to log messages from outside of this class, you can import the logger manually.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logger\n")])])]),a("p",[t._v("This can then be used outside your skill's class. Extending our first example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AliceSkill "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AliceSkill\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DialogSession "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" DialogSession\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Decorators "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" IntentHandler\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logger\n\nLogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is a logged info level message outside of the skill class scope"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_special_function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tLogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Another usage of logging."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorldskill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AliceSkill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@IntentHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HelloWorldIntent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorldIntent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DialogSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("_kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n\t\t\tskills can log useful information.\n\t\t\tThese will appear in the Web Interface and the logs file.\n\t\t"""')]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an info level log message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endDialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randomTalk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helloWorld'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tmy_special_function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("When you want to print stack traces when logging outside of the skill's class it might be required to provide\na different depth for the stack trace to the Logger class, since the default depth of the stack trace is 4.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log message with stack trace'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);