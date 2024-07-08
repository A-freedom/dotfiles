
### system update
```
sudo apt update
sudo apt upgrade -y
```

### installing
- git
- curl
- stow
- zsh
- vscode
- playerctl
- feh
```
sudo apt install git curl stow zsh vscode playerctl feh -y
```

### make zsh the defualt
```
chsh -s $(which zsh)
```

### installing oh-my-zsh
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### installing addons
```
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
git clone https://github.com/jeffreytse/zsh-vi-mode $ZSH_CUSTOM/plugins/zsh-vi-mode
```

### installing neovim
```
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz
sudo rm -rf /opt/nvim
sudo tar -C /opt -xzf nvim-linux64.tar.gz
```

### finaly copy the dotfiles to your system
```
stow --adopt .
```
