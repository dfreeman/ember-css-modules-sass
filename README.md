# ember-css-modules-sass [![Build Status](https://travis-ci.org/dfreeman/ember-css-modules-sass.svg?branch=master)](https://travis-ci.org/dfreeman/ember-css-modules-sass)

This [ember-css-modules](https://github.com/salsify/ember-css-modules) plugin automatically configures ECM to handle SCSS syntax and work collaboratively with [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass).

Installation
------------------------------------------------------------------------------

This addon will typically be used alongside both ember-css-modules _and_ ember-cli-sass.

```sh
ember install ember-css-modules ember-cli-sass ember-css-modules-sass
```

## Usage

Just the same as with vanilla ember-css-modules, but using `.scss` files for your modules, e.g.

```hbs
{{! app/components/my-component/template.hbs }}

<div local-class="cool">😎</div>
```

```scss
// app/components/my-component/styles.scss

@mixin blowinUp($factor) {
  font-size: $factor;
}

.cool {
  @include blowinUp(200%);
}
```

![image](https://user-images.githubusercontent.com/108688/27016516-daab38b6-4eee-11e7-8577-7d4ad475eb7f.png)


## Configuration

This plugin will configure ember-css-modules so that classes in all `.scss` files in your project will be namespaced. If you need finer-grained control over the treatment of specific aspects of the interplay between CSS Modules and Sass, see the [ember-css-modules preprocessors guide](https://github.com/salsify/ember-css-modules/blob/master/docs/PREPROCESSORS.md).

## Usage with Embroider

For applications, the relative output path from one CSS processor is in a different location with Embroider than with a regular Ember CLI build. If `ember-css-modules-sass` detects that you're running in an application with `@embroider/compat` installed, it will attempt to adjust its `intermediateOutputPath` setting accordingly.
