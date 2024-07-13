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

# Packages to install
packages=()

# Check if the user wants to install each package
for program in git curl stow zsh neovim code playerctl feh diodon compton polybar alacritty i3; do
    if prompt_install "$program"; then
        packages+=("$program")
    fi
done

# Install selected packages
if [ ${#packages[@]} -ne 0 ]; then
    sudo apt install "${packages[@]}" -y
fi

# Make Zsh the default shell
if prompt_install "zsh as default shell"; then
    chsh -s $(which zsh)
fi

# Install oh-my-zsh
if prompt_install "oh-my-zsh"; then
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
fi

# Install powerlevel10k theme
if prompt_install "powerlevel10k theme"; then
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
fi

# Install Zsh plugins
if prompt_install "zsh-autosuggestions plugin"; then
    git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
fi

if prompt_install "zsh-syntax-highlighting plugin"; then
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
fi

if prompt_install "zsh-vi-mode plugin"; then
    git clone https://github.com/jeffreytse/zsh-vi-mode $ZSH_CUSTOM/plugins/zsh-vi-mode
fi

# Install Neovim
if prompt_install "neovim"; then
    curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz
    sudo rm -rf /opt/nvim
    sudo tar -C /opt -xzf nvim-linux64.tar.gz
fi

# Copy dotfiles to the system
if prompt_install "dotfiles using stow"; then
    stow .
fi

# Remap keyboard layout
if prompt_install "keyboard layout remapping"; then
    sudo bash -c 'cat << EOF > /etc/X11/xorg.conf.d/00-keyboard.conf
Section "InputClass"
    Identifier "system-keyboard"
    MatchIsKeyboard "on"
    Option "XkbOptions" "terminate:ctrl_alt_bksp,caps:escape_shifted_capslock"
EndSection
EOF'
fi

# Change the functionality of the power button
if prompt_install "power button functionality change"; then
    sudo sed -i 's/^#\(HandlePowerKey=\).*/\1suspend/' /etc/systemd/logind.conf
    sudo sed -i 's/^#\(HandlePowerKeyLongPress=\).*/\1poweroff/' /etc/systemd/logind.conf
    sudo sed -i 's/^\(HandlePowerKey=\).*/\1suspend/' /etc/systemd/logind.conf
    sudo sed -i 's/^\(HandlePowerKeyLongPress=\).*/\1poweroff/' /etc/systemd/logind.conf
fi

echo "Installation and configuration completed. Please restart your computer for all changes to take effect."

