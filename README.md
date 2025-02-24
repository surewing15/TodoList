# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Auto detect text files and perform LF normalization

- text=auto

# Documents

_.doc binary
_.DOC binary
_.docx binary
_.DOCX binary
_.pdf binary
_.PDF binary
_.rtf binary
_.RTF binary
_.md text diff=markdown
_.mdx text diff=markdown
_.tex text diff=tex
_.txt text
_.csv text
_.tab text
\*.tsv text

# Graphics

_.png binary
_.jpg binary
_.jpeg binary
_.gif binary
_.ico binary
_.svg text
\*.eps binary

# Scripts

_.bash text eol=lf
_.sh text eol=lf
_.zsh text eol=lf
_.bat text eol=crlf
_.cmd text eol=crlf
_.ps1 text eol=crlf

# Programming Languages

_.c text diff=cpp
_.cpp text diff=cpp
_.h text diff=cpp
_.hpp text diff=cpp
_.cs text diff=csharp
_.go text diff=golang
_.java text diff=java
_.js text
_.jsx text
_.ts text
_.tsx text
_.py text diff=python
_.rb text diff=ruby
_.php text diff=php
_.pl text diff=perl
_.sql text

# Web

_.css text diff=css
_.html text diff=html
_.xhtml text diff=html
_.json text
_.yaml text
_.yml text
_.xml text
_.toml text

# Configs

.env text
_.conf text
_.config text
.htaccess text
_.ini text
_.lock text
\*.properties text

# Source Maps

\*.map text -diff

# Git Configuration

.gitattributes text export-ignore
.gitignore text export-ignore
.gitkeep text export-ignore

# Build and Dependencies

\*.lock text -diff
package-lock.json text -diff
yarn.lock text -diff
composer.lock text -diff

# Special Files

Makefile text
LICENSE text
AUTHORS text

# Linting

.eslintrc text
.prettierrc text
.stylelintrc text

# Docker

Dockerfile text
_.dockerfile text
docker-compose_.yml text

# Exclude files from exporting

.gitignore export-ignore
.gitattributes export-ignore
.gitkeep export-ignore
