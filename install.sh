#!/bin/bash

function install_i3_gaps() {

  mkdir /tmp/build 
  cd /tmp/build
  git clone https://www.github.com/Airblader/i3 i3-gaps
  cd i3-gaps
  git checkout gaps && git pull
  sudo apt install meson asciidoc
  meson -Ddocs=true -Dmans=true ../build
  meson compile -C ../build
  sudo meson install -C ../build
}

# Function to prompt for user input
prompt_install() {
    read -p "Do you want to install $1? (y/n) " choice
    case "$choice" in 
        y|Y ) return 0;;
        n|N ) return 1;;
        * ) echo "Invalid choice"; prompt_install $1;;
    esac
}

# Update and upgrade the system
echo "Updating and upgrading the system..."
sudo apt update
sudo apt upgrade -y


# Check if the user wants to install each package
sudo apt install git curl stow zsh neovim playerctl feh diodon compton polybar alacritty i3 ibus -y
# Make Zsh the default shell
chsh -s $(which zsh)
sudo -k chsh -s $(which zsh) "$USER"  # -k forces the password prompt

# Copy dotfiles to the system
rm -rf ~/.zshrc
stow .


