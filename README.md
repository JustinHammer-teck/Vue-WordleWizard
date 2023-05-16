<h1 align="center">Wordle VVizard</h1>

<p align="center">
    <a href="#overview">Overview</a> |
    <a href="#development">Development</a> |
    <a href="#contributors">Contributors</a>
</p>

[![wakatime](https://wakatime.com/badge/user/e8bb07f7-2c8e-4e41-9b2c-ae73205a1c83/project/173b4103-418d-4c11-a8e7-f6f517f66672.svg)](https://wakatime.com/badge/user/e8bb07f7-2c8e-4e41-9b2c-ae73205a1c83/project/173b4103-418d-4c11-a8e7-f6f517f66672)

# Overview

This repository contains the source code for the Wordle Solver. The site is written using [Vue 3](https://vuejs.org/), [TypeScript](https://typescriptlang.org/) and [Tailwind](https://tailwindcss.com/), and deployed within my homelab infrastruture.

The Backend will be developed at a different repo.

# Development

## Gitpod 

You can develop this project using Gitpod. I already create a template for it in .gitpod.yml

Go to [Gitpod](https://www.gitpod.io/) create a new workspace with this git repo URL 

One reminder **Gitpod** vscode in browser is not Vscode CodeServer but a different taste of it, so you might not find some of your favorite extension there

## Local Development

For my personal taste I'm using [Jetbrains Webstorm](https://www.jetbrains.com/webstorm/) to develop.

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

