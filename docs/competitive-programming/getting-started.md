---
title: Getting Started
---

# Getting Started

## Prerequisites

You will need to have the following installed on your computer:
- [C++](https://isocpp.org/)
- A good code editor or IDE (e.g. [VS Code](https://code.visualstudio.com/), [CLion](https://www.jetbrains.com/clion/), [Vim](https://www.vim.org/), etc.)
- A terminal (e.g. [iTerm2](https://iterm2.com/), [Hyper](https://hyper.is/), etc.)

If you do not have any of these installed, please follow the instructions below.

## Installing C++
### Windows

<br />

#### Scoop (for the simple minded)

This is the simplest way to install C++ on Windows. Scoop is a command-line package manager for Windows. It is similar to Homebrew on macOS.

First of all, install [Scoop](https://scoop.sh/). Open a PowerShell window as administrator and run the following command:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

Then, install the Scoop Extras:

```powershell
scoop bucket add main
```

Finally, install msys2:

```powershell
scoop install msys2
```

Then, open a new PowerShell window and launch the UCRT64 environment:

```powershell
ucrt64
```

You can now finally install the C++ compiler:

```powershell
pacman -Syu && pacman -S mingw-w64-ucrt-x86_64-gcc
```

You may also just head to the [MSYS2 website](https://www.msys2.org/) and download the installer although Scoop can also be useful for installing other packages in the future.

#### Visual Studio

If you are using Visual Studio, you can install the C++ compiler by installing Visual Studio. You can download Visual Studio [here](https://visualstudio.microsoft.com/downloads/).


### macOS

<br />

#### Homebrew

If you are using Homebrew, you can install the C++ compiler by running the following command:

```bash
brew install gcc
```

You may also opt to use the LLVM compiler instead:

```bash
brew install llvm
```

#### Xcode

If you are using Xcode, you can install the C++ compiler by installing Xcode. You can download Xcode [here](https://developer.apple.com/xcode/).


### Linux

<br />

Debian-based distributions (e.g. Ubuntu, Linux Mint, etc.):

```bash
sudo apt-get update
sudo apt-get install build-essential
```

Red Hat-based distributions (e.g. Fedora, CentOS, etc.):

```bash
sudo yum groupinstall 'Development Tools'
```

::: tip
If you encounter errors with `yum`, see [this Stack Exchange post](https://unix.stackexchange.com/a/585310).
:::

Arch-based distributions (e.g. Arch Linux, Manjaro, etc.):

```bash
sudo pacman -Syu --needed base-devel
```

openSUSE systems:

```bash
sudo zypper install -t pattern devel_basis
```

::: tip
openSUSE users may also install the package using YaST.
:::

## Installing a Code Editor or IDE

<br />

### VS Code

Head to the [VS Code website](https://code.visualstudio.com/) and download the installer.

::: tip
You may also refer to your system's package manager for installing VS Code.
:::

### CLion

Head to the [CLion website](https://www.jetbrains.com/clion/) and download the installer.

Do note that CLion is not free and you will need to purchase a license to use it. You may also apply for a free student license [here](https://www.jetbrains.com/community/education/#students).

### Vim

Should usually be pre-installed on most systems. If not, refer to your system's package manager for installing Vim.

## Installing a Terminal

Honestly if you need this you need some help.