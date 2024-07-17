-- disable the auto copying
vim.api.nvim_set_keymap('n', 'd', '"_d', { noremap = true, silent = true })
vim.api.nvim_set_keymap('n', 'D', '"_D', { noremap = true, silent = true })
vim.api.nvim_set_keymap('n', 'c', '"_c', { noremap = true, silent = true })
vim.api.nvim_set_keymap('n', 'C', '"_C', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', 'd', '"_d', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', 'D', '"_D', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', 'c', '"_c', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', 'C', '"_C', { noremap = true, silent = true })

vim.g.mapleader = "z"

-- Remap to go to the start of the line
vim.api.nvim_set_keymap('n', '<leader>h', '^', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<leader>h', '^', { noremap = true, silent = true })

-- Remap to go to the end of the line
vim.api.nvim_set_keymap('n', '<leader>l', '$', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<leader>l', '$', { noremap = true, silent = true })

-- Remap to go to the start of the file
vim.api.nvim_set_keymap('n', '<leader>k', 'gg', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<leader>k', 'gg', { noremap = true, silent = true })

-- Remap to go to the end of the file
vim.api.nvim_set_keymap('n', '<leader>j', 'G', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<leader>j', 'G', { noremap = true, silent = true })

-- Enable both normal and relative line numbering
vim.api.nvim_exec([[
  set number       " Enable normal line numbering
  set relativenumber  " Enable relative line numbering
]], false)

-- Set number of context lines (optional)
vim.api.nvim_exec([[
  set numberwidth=2   " Adjust the width of line numbers if needed
]], false)

vim.g.base46_cache = vim.fn.stdpath "data" .. "/nvchad/base46/"
-- vim.g.mapleader = " "

-- bootstrap lazy and all plugins
local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"

if not vim.loop.fs_stat(lazypath) then
  local repo = "https://github.com/folke/lazy.nvim.git"
  vim.fn.system { "git", "clone", "--filter=blob:none", repo, "--branch=stable", lazypath }
end

vim.opt.rtp:prepend(lazypath)

local lazy_config = require "configs.lazy"
-- load plugins
require("lazy").setup({
  {
    "NvChad/NvChad",
    lazy = false,
    branch = "v2.5",
    import = "nvchad.plugins",
    config = function()
      require "options"
    end,
  },

  { import = "plugins" },
}, lazy_config)

-- load theme
dofile(vim.g.base46_cache .. "defaults")
dofile(vim.g.base46_cache .. "statusline")

require "nvchad.autocmds"

vim.schedule(function()
  require "mappings"
end)



