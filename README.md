# Dotfiles Repository

Welcome to my dotfiles repository. Below is an overview of what you will get:

## i3 Window Manager Configuration

- **Polybar**: Themed configuration
- **Rofi**: Application launcher
- **Diodon**: Clipboard manager
- **Compton**: Window composition manager

### i3 Configuration Details

- **Terminal**: Alacritty
- **Browser**: Microsoft Edge
- **Startup Executions**:
  - Set gaps (inner 8)
  - Disable title bar and replacing it with (polybar)
  - Set screen resolution and refresh rate (xrandr)
  - Set transparent window (compton)
  - Set wallpaper (feh)
  - Start networks (nmcli)
  - clipboard manager shortcut (diodon)
  - Workspace and application assignments, using vim motion `mod + [h,j,k,l]` rather that the defualt `mode + [j,k,l,;]`
  - Enable Urgent window focus
  - System modes (lock, exit, suspend, reboot, poweroff) `mod + end`
- **Key Bindings**:
  - Mod4 (Super) as modifier key
  - Various key bindings for window focus, movement, and layout , using vim motion `mod + [h,j,k,l]` rather that the defualt `mode + [j,k,l,;]`
  - Application launcher (Rofi), `mod + p`
  - Media player controls (Playerctl) `keyboard media buttoms and volume scroll wheel`
  - System actions (lock, exit, suspend, reboot, poweroff), A menu `mod + end`, unfortunatley the menu cann't be see because the disableing of the defualt title bar


## Neovim

- Install Neochad

## Terminal Setup

- **Install Zsh** as the main shell
- **Install Oh-My-Zsh** for plugin management
- **Plugins**:
  1. Powerlevel10k: Configuring the prompt
  2. zsh-vi-mode: Vim-like motion support
  3. zsh-syntax-highlighting: Syntax highlighting
  4. zsh-autosuggestions: Auto-suggestions and completions
  5. Git plugin

### Alacritty Configuration

- **Font Settings**:
  - Size: 16.0
  - Family: "JetBrainsMono Nerd Font"
  - Styles: Bold, Bold Italic, Italic, Regular
- **Window Padding**: 15px (x and y)

## Packages to be Installed

- git
- curl
- stow
- zsh
- neovim
- playerctl
- feh
- diodon
- compton
- polybar
- alacritty
- i3
- ibus
- rofi
- fzf


## Other System Configurations

### Remapping Keyboard Layout

- **Map Caps Lock to Escape**
- **Make Shift + Caps Lock work as Caps Lock**

Add the following line to `/etc/X11/xorg.conf.d/00-keyboard.conf`:

```bash
Option "XkbOptions" "terminate:ctrl_alt_bksp,caps:escape_shifted_capslock"
```

### Changing the Functionality of the Power Button

Add or change the following lines in `/etc/systemd/logind.conf`:

```bash
HandlePowerKey=suspend
HandlePowerKeyLongPress=poweroff
```