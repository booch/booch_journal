# BoochJournal

BoochJournal is a web app for writing daily journal entries of various types.

NOTE: This is a work in progress. Most (if not all) the features are not yet implemented.


## Features

* Multiple journals
    * You'll always go to the last journal you were in
        * So if you only have 1, this feature won't get in your way
    * Each journal has a name
    * Each journal is configured and stored separately
* Journals have multiple entries
    * Each entry has an entry type
    * Entries will have a created_at and updated_at dates
    * Journal entries will be written in Markdown
* Entry types
    * An entry type can have a template
        * The template can contain markdown
        * The template can contain CSS for the Markdown-to-HTML view
* All data should be stored in a central location
    * But I shouldn't have to worry about conflicts
        * So we'll have to deal with conflicts
            * Ideally, put the entries in files in a git repository
                * This will liekly require a server-side component
    * Ideally, the entries should be encrypted
        * Will have to look into options for encrypting files in git but being able to diff changes
* Easy navigation between entries
    * Via several axes
        * Date
        * Entry type
        * Tags
        * Search


## Tech Stack

* Svelte
* TypeScript
* Elixir/Phoenix (if any server-side support is required)


## Goals

This is primarily to give me a tool to use for my own journaling.
It's also to give me a little side project where I can learn new tools.

* Provide a tool I can use for journaling
* Learn Svelte
* Learn CSS Grid
* Learn/show what good UX, UI, and design look like

I may eventually turn the web app into a mobile app.
In that case, I might learn Swift or Cordova or something else.
