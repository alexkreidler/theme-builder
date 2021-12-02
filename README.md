# Theme Builder

This is a tool to create themes for new websites or applications based on the structure of [Chakra UI themes](https://chakra-ui.com/docs/theming/theme), the [Theme UI Specification](https://theme-ui.com/theme-spec), or the [System UI Theme Specification](https://system-ui.com/theme/). This should allow the generated theme to be used across a variety of frontend component libraries. 


Internally, the project uses Chakra to render the editor UI.


## TODOs

- Editor
  - [ ] Make each property in editor a dropdown
  - [ ] Allow picking font from Google fonts and auto-load them
  - [ ] collapse the `sm-2xl` to some inline editor so it takes less space
  - [ ] allow adding custom keys for each property
- Preview
  - [ ] allow switching the preview page, have multiple (eg component library viewer with all components one page, and application interface)
  - [ ] dynamic loading of preview page (maybe something like stackblitz or codesandbox runtime), so can load arbitrary chakra UI projects or even specific components / from github)