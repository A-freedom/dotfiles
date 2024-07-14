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
sudo apt install git curl stow zsh code playerctl feh diodon compton polybar alacritty i3
# Make Zsh the default shell
chsh -s $(which zsh)

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install powerlevel10k theme
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
#
# Install Zsh plugins
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
git clone https://github.com/jeffreytse/zsh-vi-mode $ZSH_CUSTOM/plugins/zsh-vi-mode




# Copy dotfiles to the system

stow .


